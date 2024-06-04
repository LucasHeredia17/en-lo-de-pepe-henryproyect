import Credential from "../entities/Credential";
import ICreateCredentialDto from "../interfaces/ICreateCredential";
import IValidateCredentialDto from "../interfaces/IValidateCredential";
import { credentialRepository } from "../repositories/repositories";

export const createCredential = async (
  createCredentialDto: ICreateCredentialDto
): Promise<Credential> => {
  const newCredendial: Credential =
    credentialRepository.create(createCredentialDto);

  await credentialRepository.save(newCredendial);
  return newCredendial;
};

export const validateCredendial = async (
  validateCredendialDto: IValidateCredentialDto
): Promise<Credential> => {
  const { username, password } = validateCredendialDto;
  const foundCredential: Credential | null =
    await credentialRepository.findOneBy({
      username,
    });

  if (!foundCredential) throw Error("Usuario no encontrado");
  if (password !== foundCredential.password)
    throw Error("Contraseña incorrecta");

  return foundCredential;
};
