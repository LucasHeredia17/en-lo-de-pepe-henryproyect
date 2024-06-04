import { Router } from "express";
import usersRouters from "./usersRouters";
import appointmentsRouter from "./appointmentsRouter";

const indexRouters = Router();

indexRouters.use("/users", usersRouters);
indexRouters.use("/appointments", appointmentsRouter);

export default indexRouters;
