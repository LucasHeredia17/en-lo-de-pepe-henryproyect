import { createCredential } from "./credentialsService";
import Credential from "../entities/Credential";
import ICreateUserDto from "../interfaces/ICreateUserDto";
import User from "../entities/User";
import { userRepository } from "../repositories/repositories";

export const getAllUsersService = async (): Promise<User[]> => {
  const allUsers: User[] = await userRepository.find({
    relations: ["appointments"],
  });
  return allUsers;
};

export const getAllUserByIdService = async (id: number): Promise<User> => {
  const foundUser: User | null = await userRepository.findOne({
    where: { id },
    relations: ["appointments"],
  });
  if (!foundUser) throw Error("Usuario no encontrado");
  return foundUser;
};

export const createUserService = async (
  createUserDto: ICreateUserDto
): Promise<User> => {
  const newCredendial: Credential = await createCredential({
    username: createUserDto.username,
    password: createUserDto.password,
  });

  const newUser: User = userRepository.create(createUserDto);
  await userRepository.save(newUser);

  newUser.credential = newCredendial;
  await userRepository.save(newUser);

  return newUser;
};

export const findUserByCredentialIdService = async (
  credentialId: number
): Promise<User | null> => {
  const credentialUser: User | null = await userRepository.findOneBy({
    credential: { id: credentialId },
  });
  if (!credentialUser) throw Error("Usuario no encontrado");
  return credentialUser;
};
