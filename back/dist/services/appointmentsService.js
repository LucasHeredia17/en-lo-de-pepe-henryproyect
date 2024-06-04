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
exports.cancelAppointmentService = exports.createScheduleService = exports.getAppointmentsByIdService = exports.getAllAppointmentsService = void 0;
const ICreateAppointmentDto_1 = require("../interfaces/ICreateAppointmentDto");
const repositories_1 = require("../repositories/repositories");
const getAllAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allAppointments = yield repositories_1.appointmentRepository.find();
    return allAppointments;
});
exports.getAllAppointmentsService = getAllAppointmentsService;
const getAppointmentsByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAppointment = yield repositories_1.appointmentRepository.findOne({ where: { id } });
    if (!foundAppointment)
        throw Error("Turno no encontrado");
    return foundAppointment;
});
exports.getAppointmentsByIdService = getAppointmentsByIdService;
const createScheduleService = (createScheduleDto) => __awaiter(void 0, void 0, void 0, function* () {
    if (createScheduleDto.userId === undefined)
        throw Error("El usuario no existe");
    const status = createScheduleDto.status || ICreateAppointmentDto_1.AppointmentStatusDto.ACTIVE;
    const user = yield repositories_1.userRepository.findOne({
        where: { id: createScheduleDto.userId },
    });
    if (!user)
        throw Error("Usuario no encontrado");
    const newAppointment = repositories_1.appointmentRepository.create(Object.assign(Object.assign({}, createScheduleDto), { status, user: user }));
    yield repositories_1.appointmentRepository.save(newAppointment);
    return newAppointment;
});
exports.createScheduleService = createScheduleService;
const cancelAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentIndex = yield repositories_1.appointmentRepository.findOne({
        where: { id },
    });
    if (!appointmentIndex)
        throw Error("Turno no encontrado");
    appointmentIndex.status = ICreateAppointmentDto_1.AppointmentStatusDto.CANCELLED;
    yield repositories_1.appointmentRepository.save(appointmentIndex);
    return appointmentIndex;
});
exports.cancelAppointmentService = cancelAppointmentService;
