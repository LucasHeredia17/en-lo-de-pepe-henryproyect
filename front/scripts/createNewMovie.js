const axios = require("axios");
const validateForm = require("./createNewMovieModules/movieValidateForm.js");

function createMovie(event) {
  event.preventDefault();

  const title = document.getElementById("newMovieTitle").value;
  const year = document.getElementById("newMovieYear").value;
  const director = document.getElementById("newMovieDirector").value;
  const duration = document.getElementById("newMovieDuration").value;
  const genre = document.getElementById("newMovieGenre").value.split(" ");
  const rate = document.getElementById("newMovieRate").value;
  const poster = document.getElementById("newMoviePoster").value;

  const dataMovie = {
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster,
  };

  const error = validateForm(dataMovie);
  if (error) return alert(error);

  axios
    .post("http://localhost:3000/movies", dataMovie)
    .then(() => {
      alert("Pelicula creada correctamente");
    })
    .catch((error) => {
      alert("Error al crear la pelicula", error.message);
    });
}

module.exports = { createMovie };
