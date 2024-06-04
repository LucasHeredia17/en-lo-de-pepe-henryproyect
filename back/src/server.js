const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const homeRouter = require("./routes/homeRouter");
const moviesRouter = require("./routes/moviesRouter");
const app = express();

//* Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/", homeRouter);
app.use("/movies", moviesRouter);

module.exports = app;
