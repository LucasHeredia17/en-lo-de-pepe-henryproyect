const app = require("./src/server");
const { configDb } = require("./src/config/configDb.js");
const PORT = 3000;

const startServer = async () => {
  try {
    await configDb();
    app.listen(PORT, () =>
      console.log(`Server listening on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
