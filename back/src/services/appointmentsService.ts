import ICreateAppointmentDto, {
  AppointmentStatusDto,
} from "../interfaces/ICreateAppointmentDto";
import Appointment from "../entities/Appointment";
import {
  appointmentRepository,
  userRepository,
} from "../repositories/repositories";
import User from "../entities/User";

export const getAllAppointmentsService = async (): Promise<Appointment[]> => {
  const allAppointments: Appointment[] = await appointmentRepository.find();
  return allAppointments;
};

export const getAppointmentsByIdService = async (
  id: number
): Promise<Appointment> => {
  const foundAppointment: Appointment | null =
    await appointmentRepository.findOne({ where: { id } });
  if (!foundAppointment) throw Error("Turno no encontrado");
  return foundAppointment;
};

export const createScheduleService = async (
  createScheduleDto: ICreateAppointmentDto
): Promise<Appointment> => {
  if (createScheduleDto.userId === undefined)
    throw Error("El usuario no existe");

  const status = createScheduleDto.status || AppointmentStatusDto.ACTIVE;

  const user: User | null = await userRepository.findOne({
    where: { id: createScheduleDto.userId },
  });
  if (!user) throw Error("Usuario no encontrado");

  const newAppointment: Appointment = appointmentRepository.create({
    ...createScheduleDto,
    status,
    user: user,
  });
  await appointmentRepository.save(newAppointment);

  return newAppointment;
};

export const cancelAppointmentService = async (
  id: number
): Promise<Appointment | null> => {
  const appointmentIndex = await appointmentRepository.findOne({
    where: { id },
  });
  if (!appointmentIndex) throw Error("Turno no encontrado");

  appointmentIndex.status = AppointmentStatusDto.CANCELLED;
  await appointmentRepository.save(appointmentIndex);

  return appointmentIndex;
};
