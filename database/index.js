const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movielist', {
});

let movieSchema = new mongoose.Schema({
  // TODO: your schema here!
  title: String,

});

let Movies = mongoose.model('Movies', movieSchema);

module.exports.addMovie = (cb) => {
  Movies.create({title: 'Hello world'})
    .then((result) => {
      console.log('success!')
      cb(result);
    })

}

module.exports.retrieveMovies = (cb) => {
  Movies.find({})
    .then((res) => cb(res))
}

// module.exports.addMovie = addMovie;
// module.exports.retrieveMovies = retrieveMovies;



