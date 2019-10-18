const keys = require('./keys.js')
const axios = require('axios');
const moment = require('moment')
const spotify = require('node-spotify-api')
const fs = require('fs')

var movie = "The Matrix"
var movieCorrected = movie.replace(" ", "+")
// Make a request for a user with a given ID
var command = process.argv[2]


// var input = ""
// for (let i = 3; i < process.argv.length; i++) {
//     input += process.argv[i] + " "
// }
// console.log(input)



if (command === "movie-this") {
    var input = ""
    for (let i = 3; i < process.argv.length; i++) {
        input += process.argv[i] + " "
    }
    console.log(input)
    axios.get(`http://www.omdbapi.com/?t=${input}&y=&plot=short&apikey=477e5877`)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
} else if (command === "concert-this") {
    var input = ""
    for (let i = 3; i < process.argv.length; i++) {
        input += process.argv[i]
    }
    console.log(input)
    userInput = input.split
    axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
        .then(function (response) {
            // handle success
            console.log(`Artist: ${response.data[0].lineup[0]}`);
            console.log(`Venue: ${response.data[0].venue.name}`)
            console.log(`Location of Venue: ${response.data[0].venue.city} ${response.data[0].venue.region} ${response.data[0].venue.country}`)
            console.log(`Date: ${moment(response.data[0].datetime).format(`MM DD YYYY`)}`)
        })
        .catch(function (error) {
            // handle error
            console.log("ERROR" + error + "ERROR");
        })
}

