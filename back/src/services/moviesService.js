const Movie = require("../models/Movie");

module.exports = {
  getMoviesService: async () => {
    const allMovies = await Movie.find();
    return allMovies;
  },
  postMovieService: async (movie) => {
    const newMovie = new Movie(movie);
    const savedMovie = await newMovie.save();
    return savedMovie;
  },
};
