"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = exports.credentialRepository = exports.appointmentRepository = void 0;
const data_source_1 = require("../config/data-source");
const Appointment_1 = __importDefault(require("../entities/Appointment"));
const Credential_1 = __importDefault(require("../entities/Credential"));
const User_1 = __importDefault(require("../entities/User"));
exports.appointmentRepository = data_source_1.AppDataSource.getRepository(Appointment_1.default);
exports.credentialRepository = data_source_1.AppDataSource.getRepository(Credential_1.default);
exports.userRepository = data_source_1.AppDataSource.getRepository(User_1.default);
