import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./FormAppointments.module.css";
import validateFormAppointments from "../../helpers/validateFormAppointments";

const FormAppointments = () => {
  const navigate = useNavigate();
  const initialState = {
    date: "",
    time: "",
    description: "",
  };
  const userId = useSelector((state) => state.actualUser?.userData?.user?.id);

  const [appointment, setAppointment] = useState(initialState);
  const [errors, setErrors] = useState({
    date: "Debe ingresar una fecha.",
    time: "Debe ingresar una hora.",
    description: "Debe describir el motivo del turno.",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setAppointment({
      ...appointment,
      [name]: value,
    });
    setErrors(
      validateFormAppointments({
        ...appointment,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAppointment = {
      date: appointment.date,
      time: appointment.time,
      description: appointment.description,
      userId,
    };
    axios
      .post("http://localhost:3000/appointments/schedule", newAppointment)
      .then(({ data }) => {
        alert(
          `¡Su turno con el día ${data.date} a las ${data.time}hs ha sido creado!`
        );
        navigate("/my-appointments");
      })
      .catch((error) => {
        error.message;
      });
  };

  return (
    <div className={style.container}>
      <div className={style.registerContainer}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h1 className={style.title}>Crear Nuevo Turno</h1>

          <div className={style.inputBox}>
            <label htmlFor="date">Fecha:</label>
            <input
              id="date"
              name="date"
              value={appointment.date}
              type="date"
              placeholder="Ingresa tu fecha."
              onChange={handleChange}
            />
            <p>{errors.date && errors.date}</p>
          </div>

          <div className={style.inputBox}>
            <label htmlFor="time">Hora:</label>
            <input
              id="time"
              name="time"
              value={appointment.time}
              type="time"
              placeholder="Ingresa un horario."
              onChange={handleChange}
            />
            <p>{errors.time && errors.time}</p>
          </div>

          <div className={style.inputBox}>
            <label htmlFor="description">Descripción:</label>
            <input
              id="description"
              name="description"
              value={appointment.description}
              type="text"
              placeholder="Ingresa un motivo."
              onChange={handleChange}
            />
            <p>{errors.description && errors.description}</p>
          </div>

          <span className={style.span}>Todos los campos son obligatorios.</span>

          <button
            className={style.btn}
            type="submit"
            disabled={Object.keys(appointment).some((e) => !appointment[e])}
          >
            Crear Turno
          </button>
        </form>
        <div className={style.loginLink}>
          <p>
            <Link to="/my-appointments">Aquí puedes ver tus turnos</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormAppointments;
