function clearForm() {
  document.getElementById("newMovieTitle").value = "";
  document.getElementById("newMovieYear").value = "";
  document.getElementById("newMovieDirector").value = "";
  document.getElementById("newMovieDuration").value = "";
  document.getElementById("newMovieGenre").value = "";
  document.getElementById("newMovieRate").value = "";
  document.getElementById("newMoviePoster").value = "";
}

module.exports = clearForm;
