console.log(`This is loaded`);

module.exports= {
    spotify: {
      id: process.env.SPOTIFY_ID,
      secret: process.env.SPOTIFY_SECRET
    },
    BandsInTown: {
      key: process.env.BandsInTownID
    },
    omdbID: {
      key: process.env.omdbID
    }
  }