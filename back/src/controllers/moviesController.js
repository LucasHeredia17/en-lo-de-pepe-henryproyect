const {
  getMoviesService,
  postMovieService,
} = require("../services/moviesService.js");

module.exports = {
  getMoviesController: async (req, res) => {
    try {
      const movies = await getMoviesService();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({
        message: "Error al obtener las películas",
        error: error.message,
      });
    }
  },
  postMovieController: async (req, res) => {
    try {
      const { title, year, director, duration, genre, rate, poster } = req.body;
      const savedMovie = await postMovieService({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      });
      res.status(201).json(savedMovie);
    } catch (error) {
      res.status(500).json({
        message: "Error al obtener las películas",
        error: error.message,
      });
    }
  },
};
