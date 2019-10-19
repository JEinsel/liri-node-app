require('dotenv').config()
const keys = require('./keys.js')
const axios = require('axios');
const moment = require('moment')
const Spotify = require('node-spotify-api')

const spotify = new Spotify(keys.spotify)
const fs = require('fs')

// Make a request for a user with a given ID
var command = process.argv[2]
// console.log(command)
fs.appendFile("./log.txt",`\n${command} ${process.argv.slice(3).join(" ")}`,  (err, data) => {
    console.log(data)
}) 

function spotifySearch(userInput) {
    spotify.search({ type: `track`, query: userInput, limit: 1 })
        .then(function (response) {
            console.log(`Artist - ${response.tracks.items[0].artists[0].name}`);
            console.log(`Song Title - ${response.tracks.items[0].name}`);
            console.log(`Preview URL - ${response.tracks.items[0].preview_url}`)
            console.log(`Album - ${response.tracks.items[0].album.name}`)
        })
}

function concertSearch(userInput) {
    axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp")
        .then(function (response) {
            // handle success
            console.log(`Artist - ${response.data[0].lineup[0]}`);
            console.log(`Venue - ${response.data[0].venue.name}`)
            console.log(`Location of Venue - ${response.data[0].venue.city} ${response.data[0].venue.region} ${response.data[0].venue.country}`)
            console.log(`Date - ${moment(response.data[0].datetime).format(`MM DD YYYY`)}`)
        })
        .catch(function (error) {
            // handle error
            console.log("ERROR" + error + "ERROR");
        })
}

function movieSearch(userInput) {
    axios.get(`http://www.omdbapi.com/?t=${userInput}&y=&plot=short&apikey=477e5877`)
        .then(function (response) {
            // handle success
            console.log(response.data.Title);
            console.log(`imdb rating  ${response.data.imdbRating}`);
            console.log(response.data.Country);
            console.log(response.data.Language)
            console.log(response.data.Plot)
            console.log(response.data.Actors)
            if (response.data.Ratings) {
                for (let i = 0; i < response.data.Ratings.length; i++) {
                    const element = response.data.Ratings[i];
                    if (element.Source === "Rotten Tomatoes") {
                        console.log(`Rotten Tomatoes ${element.Value}`)
                    }
                }
            }

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

if (command === "movie-this") {
    // For loop to get user input
    var input = ""
    for (let i = 3; i < process.argv.length; i++) {
        input += process.argv[i] + " "
    }
    // console.log(input)
    if (input === "") {
        input = "Mr. Nobody"
        movieSearch(input)
    } else {
        // console.log(input)
        movieSearch(input)
    }
} else if (command === "concert-this") {
    var input = ""
    for (let i = 3; i < process.argv.length; i++) {
        input += process.argv[i]
    }
    if (input === "") {
        input = "nf"
        concertSearch(input)
    } else {
        concertSearch(input)
    }
} else if (command === "spotify-this-song") {
    var input = ""
    for (let i = 3; i < process.argv.length; i++) {
        input += process.argv[i] + " "
    }
    if (input === "") {
        input = "The Sign"
        spotifySearch(input)
    } else {
        spotifySearch(input)
    }
} else if (command === "do-what-it-says") {
    fs.readFile('./random.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);
        var splitData = data.split(",");
        console.log(splitData[0]);
        console.log(splitData[1])
        if (splitData[0] === "spotify-this-song" && splitData[1]) {
            spotifySearch(splitData[1])
        }
    });
}
