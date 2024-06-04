const { Router } = require("express");
const {
  getMoviesController,
  postMovieController,
} = require("../controllers/moviesController.js");
const movieValidate = require("../middleware/movieValidate.js");

const movieRouter = Router();

movieRouter.get("/", getMoviesController);
movieRouter.post("/", movieValidate, postMovieController);

module.exports = movieRouter;
