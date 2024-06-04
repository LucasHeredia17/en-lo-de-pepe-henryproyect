"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersRouters_1 = __importDefault(require("./usersRouters"));
const appointmentsRouter_1 = __importDefault(require("./appointmentsRouter"));
const indexRouters = (0, express_1.Router)();
indexRouters.use("/users", usersRouters_1.default);
indexRouters.use("/appointments", appointmentsRouter_1.default);
exports.default = indexRouters;
