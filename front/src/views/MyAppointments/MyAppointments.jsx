import { useEffect } from "react";
import Appointment from "../../components/Appointment/Appointment.jsx";
import style from "./MyAppointments.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../../redux/userSlice.js";
import { Link } from "react-router-dom";

const Appointments = () => {
  const dispatch = useDispatch();

  const userName = useSelector(
    (state) => state.actualUser?.userData?.user?.name
  );
  const userId = useSelector((state) => state.actualUser?.userData?.user?.id);
  const appointments = useSelector(
    (state) => state.actualUser?.userAppointments
  );

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + userId)
      .then((res) => {
        const appointments = res.data.appointments;
        dispatch(setUserAppointments(appointments));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [dispatch, userId]);

  const handleAppointmentCancel = (appointmentId) => {
    axios
      .put("http://localhost:3000/appointments/cancel/" + appointmentId)
      .then((res) => res.data)
      .then(() => {
        axios
          .get("http://localhost:3000/users/" + userId)
          .then((res) => {
            const appointments = res.data.appointments;
            dispatch(setUserAppointments(appointments));
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        alert(`Error al cancelar reserva: ${err?.response?.data?.message}`);
      });
  };

  return (
    <>
      <h1 className={style.title}>Estos son tus turnos, {userName}</h1>
      <div className={style.container}>
        {appointments.length ? (
          appointments.map((appointment) => (
            <Appointment
              key={appointment.id}
              id={appointment.id}
              date={appointment.date}
              time={appointment.time}
              status={appointment.status}
              description={appointment.description}
              handleAppointmentCancel={handleAppointmentCancel}
            />
          ))
        ) : (
          <div className={style.formAppointment}>
            <p>
              No tienes turnos,{" "}
              <Link to="/form-appointments">puedes reservar aqui</Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Appointments;
