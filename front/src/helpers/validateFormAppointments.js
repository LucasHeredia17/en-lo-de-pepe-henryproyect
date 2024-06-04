function validateTimeFormat(time) {
  const timeRegExp = /^(0[0-9]|1[0-9]|2[0-3]):[0|3][0]$/;

  if (!timeRegExp.test(time)) {
    return false;
  }

  return true;
}

export default function validateFormAppointments(input) {
  const characteresRegExp = /^[a-zA-Z\s]+$/;
  const errors = {};

  if (!input.date) errors.date = "Debe ingresar una fecha.";
  else {
    let date = new Date(input.date);
    if (date < new Date("2024-03-20"))
      errors.date = "La fecha no puede ser antes de 20/03/2024.";
  }

  if (!input.time) errors.time = "Debe ingresar un horario.";
  else {
    if (!validateTimeFormat(input.time))
      errors.time = "El horario debe ser cada 30 minutos.";
    if (input.time < "07:00" || input.time > "23:00")
      errors.time =
        "El horario solo puede ser entre las 07:00hs y las 23:00hs.";
  }

  if (!input.description) errors.description = "Debe ingresar su motivo.";
  else {
    if (input.description.length < 4)
      errors.description = "El motivo debe tener al menos 4 carácteres.";
    if (!characteresRegExp.test(input.description))
      errors.description = "El motivo solo puede contener letras y espacios.";
  }

  return errors;
}
