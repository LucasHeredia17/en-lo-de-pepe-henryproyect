function convertirAHTML(peliculas) {
  const { title, year, director, duration, genre, rate, poster } = peliculas;

  const divMovie = document.createElement("div");
  divMovie.className = "moviesContainer card text-center";
  divMovie.innerHTML = `
    <img class="posterMovie card-img-top" src="${poster}" alt="${title}" />
    <div class="textDiv card-body col-sm">
      <a class="titleMovie card-title" href="#pordefinir">${title}</a>
      <p class="yearMovie card-text">Year: ${year}</p>
      <p class="directorMovie card-text">Director: ${director}</p>
      <p class="durationMovie card-text">Duración: ${duration}</p>
      <p class="genreMovie card-text">Género: ${genre.join(", ")}</p>
      <p class="rateMovie card-text">Rate: ${rate}</p>
    </div>
    `;

  return divMovie;
}

module.exports = convertirAHTML;
