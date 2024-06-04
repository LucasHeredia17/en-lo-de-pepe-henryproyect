import style from "./Appointment.module.css";

const Appointment = ({
  id,
  date,
  time,
  status,
  description,
  handleAppointmentCancel,
}) => {
  const buttonClass =
    status === "active" ? style.activeBtn : style.cancelledBtn;

  date = new Date(date);
  const formatDate = `${date.getDate()} / ${
    date.getMonth() + 1
  } / ${date.getFullYear()}`;

  const handleClick = () => {
    const confirmed = window.confirm(
      `Desea cancelar el turno del día ${formatDate} a las ${time}hs`
    );
    if (confirmed) {
      handleAppointmentCancel(id);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.cardContainer}>
        <p className={style.text}>{description}</p>
        <p className={style.text}>{time}hs</p>
        <p className={style.text}>{formatDate}</p>
        <p className={style.text}>{status.toUpperCase()}</p>
        <button
          className={`${style.btn} ${buttonClass}`}
          disabled={status === "cancelled"}
          onClick={handleClick}
        >
          {status === "active" ? "Cancelar Turno" : "Turno Cancelado"}
        </button>
      </div>
    </div>
  );
};

export default Appointment;
