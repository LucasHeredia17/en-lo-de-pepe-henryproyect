export enum AppointmentStatusDto {
  ACTIVE = "active",
  CANCELLED = "cancelled",
}

export default interface IAppointmentsDto {
  date: string;
  time: string;
  userId: number;
  status: AppointmentStatusDto;
  description: string;
}
