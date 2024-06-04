import cors from "cors";
import express from "express";
import morgan from "morgan";
import indexRouters from "./routes/indexRouters";

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

server.use(indexRouters);

export default server;
