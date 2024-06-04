const axios = require("axios");
const cardRender = require("./cardConverter");
const clearForm = require("./createNewMovieModules/clearForm");
const createMovieModule = require("./createNewMovie");
const url = "http://localhost:3000/movies";

const container = document.getElementById("movies");

async function actualizarContainer() {
  try {
    container.innerHTML = "";
    const { data } = await axios.get(url);
    data.map((mov) => {
      const moviesElement = cardRender(mov);
      container?.appendChild(moviesElement);
    });
  } catch (error) {
    console.log(error);
  }
}

const submit = document.getElementById("addMovieForm");
submit?.addEventListener("submit", createMovieModule.createMovie);

const clear = document.getElementById("clearForm");
clear?.addEventListener("click", clearForm);

module.exports = actualizarContainer;
