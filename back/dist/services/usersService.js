"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByCredentialIdService = exports.createUserService = exports.getAllUserByIdService = exports.getAllUsersService = void 0;
const credentialsService_1 = require("./credentialsService");
const repositories_1 = require("../repositories/repositories");
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield repositories_1.userRepository.find({
        relations: ["appointments"],
    });
    return allUsers;
});
exports.getAllUsersService = getAllUsersService;
const getAllUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield repositories_1.userRepository.findOne({
        where: { id },
        relations: ["appointments"],
    });
    if (!foundUser)
        throw Error("Usuario no encontrado");
    return foundUser;
});
exports.getAllUserByIdService = getAllUserByIdService;
const createUserService = (createUserDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredendial = yield (0, credentialsService_1.createCredential)({
        username: createUserDto.username,
        password: createUserDto.password,
    });
    const newUser = repositories_1.userRepository.create(createUserDto);
    yield repositories_1.userRepository.save(newUser);
    newUser.credential = newCredendial;
    yield repositories_1.userRepository.save(newUser);
    return newUser;
});
exports.createUserService = createUserService;
const findUserByCredentialIdService = (credentialId) => __awaiter(void 0, void 0, void 0, function* () {
    const credentialUser = yield repositories_1.userRepository.findOneBy({
        credential: { id: credentialId },
    });
    if (!credentialUser)
        throw Error("Usuario no encontrado");
    return credentialUser;
});
exports.findUserByCredentialIdService = findUserByCredentialIdService;
