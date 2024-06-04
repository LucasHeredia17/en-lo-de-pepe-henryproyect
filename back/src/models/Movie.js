const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: Number,
    required: true,
    min: [1895, `No hay películas previas a {VALUE}`],
  },
  director: {
    type: String,
    required: true,
  },
  duration: String,
  genre: [String],
  rate: Number,
  poster: {
    type: String,
    //* Custom validator
    validate: {
      validator: function (url) {
        return url.includes("https://");
      },
      message: (props) => `${props.value} no es una URL válida`,
    },
  },
  description: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
