require("dotenv").config();
const mongoose = require("mongoose");

const configDb = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

module.exports = { configDb };
