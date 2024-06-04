import { Request, Response } from "express";
import {
  cancelAppointmentService,
  createScheduleService,
  getAllAppointmentsService,
  getAppointmentsByIdService,
} from "../services/appointmentsService";
import Appointment from "../entities/Appointment";

export const getAllAppointments = async (req: Request, res: Response) => {
  const appointments: Appointment[] = await getAllAppointmentsService();
  res.status(200).json(appointments);
};

export const getAppointmentsById = async (req: Request, res: Response) => {
  const { appId } = req.params;
  try {
    const foundAppointment = await getAppointmentsByIdService(Number(appId));
    res.status(200).json(foundAppointment);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const schedule = async (req: Request, res: Response) => {
  try {
    const { date, time, userId, status, description } = req.body;
    const newAppointment: Appointment = await createScheduleService({
      date,
      time,
      userId,
      status,
      description,
    });
    res.status(201).json(newAppointment);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const cancel = async (req: Request, res: Response) => {
  const { appId } = req.params;
  try {
    const cancelAppointment = await cancelAppointmentService(Number(appId));
    res.status(200).json(cancelAppointment);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
