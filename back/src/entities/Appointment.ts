import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AppointmentStatusDto } from "../interfaces/ICreateAppointmentDto";
import User from "./User";

@Entity({ name: "appointments" })
class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  time: string;

  @Column({ type: "enum", enum: AppointmentStatusDto, name: "status" })
  status: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.appointments)
  @JoinColumn()
  user: User;
}

export default Appointment;
