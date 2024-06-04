import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  login,
  register,
} from "../controllers/usersControllers";

const usersRouters = Router();

usersRouters.get("/", getAllUsers);
usersRouters.get("/:id", getUserById);
usersRouters.post("/register", register);
usersRouters.post("/login", login);

export default usersRouters;
