LIRI is a Language Interpretation and Recognition Interface 

This app was made to help users find concerts, movies and songs using a simple interface.

First, the user must provide a .env file containing the following, without quotations

"# Spotify API keys

SPOTIFY_ID=YOUR_SPOTIFY_ID
SPOTIFY_SECRET=YOUR_SECRET_ID"

Secondly, the user must run a command npm install after selecting liri.js from the terminal, this will install packages listed in the package-json file.

Packages used include the following
Axios - For two api calls.
Moment.js - To format the response from 'concert-this' command.
dotenv - To hide API keys.
node-spotify-api - To call spotify to search for a song of the users input or default value.

LIRI accepts four commands
1. concert-this    -This will search for concerts from a specific artist of the users choosing or default value and log the nearest date.
2. spotify-this-song    - This will search spotify for a song of the users choosing or default value.
3. movie-this    - This will search for a movie of the users choosing or default value.
4. do-what-it-says   - This will read a command from a text file included.


To activate one of the commands, type the following without quotations, in this example it will be spotify-this-song.

"node liri.js spotify-this-song the bird and the worm"
![Alt text](./imgs/SpotifyThisSong.png?raw=true "Title")

Please note that the command must have dashes "-" between words to connect there whereas the search criteria does not require dashes.
These are the other commands being demonstrated.
![Alt text](./imgs/concertThis.png?raw=true "Title")
![Alt text](./imgs/omdbSearch.png?raw=true "Title")
![Alt text](./imgs/dowhatitsays.png?raw=true "Title")

You may search for specific criteria such as the following.

![Alt text](./imgs/SpotifyThisSongResult.png?raw=true "Title")
![Alt text](./imgs/concertThisResult.png?raw=true "Title")
![Alt text](./imgs/omdbSearchResult.png?raw=true "Title")

There is a default input if no search reasults are specified
![Alt text](./imgs/concertthisdefault.png.png?raw=true "Title")
![Alt text](./imgs/SpotifyThisDefault.png?raw=true "Title")
![Alt text](./imgs/omdbSearchDefault.png?raw=true "Title")

In the case of do-what-it-says, it accepts no criteria and will instead search the local log.txt file for a command.

![Alt text](./imgs/dowhatitsaysResult.png?raw=true "Title")
