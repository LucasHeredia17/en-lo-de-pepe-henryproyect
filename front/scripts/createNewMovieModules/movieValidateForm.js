function validateForm({
  title,
  year,
  director,
  duration,
  genre,
  rate,
  poster,
}) {
  if (
    !title ||
    !year ||
    !director ||
    !duration ||
    !genre[0] ||
    !rate ||
    !poster === ""
  ) {
    return "Debes rellena todos los campos por favor";
  }
  if (title.length < 3) {
    return "El título debe tener al menos 3 caracteres";
  }
  if (isNaN(year) || year < 1895) {
    return "El año debe ser un número mayor o igual a 1895";
  }
  if (director.length < 5 || director.length > 50) {
    return "El director debe tener entre 5 y 50 caracteres";
  }
  if (genre.length < 1) {
    return "Debe especificar al menos un genero";
  }
  if (isNaN(rate) || rate < 1 || rate > 10) {
    return "La puntuación debe ser un número entre 1 y 10";
  }
  if (!poster.includes("https://")) {
    return "El póster debe ser una URL válida";
  }
  return null;
}

module.exports = validateForm;
