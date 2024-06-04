module.exports = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;
  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    throw new Error("Todos los campos son requeridos");
  }
  next();
};
