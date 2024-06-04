import { Request, Response } from "express";
import {
  createUserService,
  findUserByCredentialIdService,
  getAllUserByIdService,
  getAllUsersService,
} from "../services/usersService";
import { validateCredendial } from "../services/credentialsService";
import User from "../entities/User";

export const getAllUsers = async (req: Request, res: Response) => {
  const users: User[] = await getAllUsersService();
  res.status(200).json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const foundUser: User = await getAllUserByIdService(Number(id));
    res.status(200).json(foundUser);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser: User = await createUserService({
      name,
      email,
      birthdate,
      nDni,
      username,
      password,
    });
    res.status(201).json(newUser);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const credential = await validateCredendial({ username, password });
    const user = await findUserByCredentialIdService(credential.id);
    res.status(200).json({ login: true, user });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
