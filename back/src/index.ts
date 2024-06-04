import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envs";
import server from "./server";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected...");
    server.listen(PORT, () => console.log(`Sever listening on port ${PORT}`));
  })
  .catch((error) => console.log(error));
