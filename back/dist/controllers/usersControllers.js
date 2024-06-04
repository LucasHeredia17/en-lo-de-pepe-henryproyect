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
exports.login = exports.register = exports.getUserById = exports.getAllUsers = void 0;
const usersService_1 = require("../services/usersService");
const credentialsService_1 = require("../services/credentialsService");
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, usersService_1.getAllUsersService)();
    res.status(200).json(users);
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const foundUser = yield (0, usersService_1.getAllUserByIdService)(Number(id));
        res.status(200).json(foundUser);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getUserById = getUserById;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;
        const newUser = yield (0, usersService_1.createUserService)({
            name,
            email,
            birthdate,
            nDni,
            username,
            password,
        });
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const credential = yield (0, credentialsService_1.validateCredendial)({ username, password });
        const user = yield (0, usersService_1.findUserByCredentialIdService)(credential.id);
        res.status(200).json({ login: true, user });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.login = login;
