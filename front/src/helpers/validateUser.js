export default function validateUser(input) {
  const emailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const passMinRegExp = /[a-z]/;
  const passMayusRegExp = /[A-Z]/;
  const passNumRegExp = /[0-9]/;
  const errors = {};

  //* NAME
  input.name = input.name.trim();
  if (!input.name) errors.name = "Debe ingresar un nombre.";
  else {
    if (input.name.length < 3)
      errors.name = "El nombre debe tener al menos 3 carácteres.";
    if (input.name.length > 25)
      errors.name = "El nombre debe tener menos de 25 carácteres.";
  }

  //* EMAIL
  if (!input.email) errors.email = "Debe ingresar un email.";
  else {
    if (!emailRegExp.test(input.email))
      errors.email = "Debe ingresar un email válido.";
  }

  //* BIRTHDATE
  if (!input.birthdate) errors.birthdate = "Debe ingresar una fecha.";
  else {
    let date = new Date(input.birthdate);
    if (date > new Date()) errors.birthdate = "La fecha no puede ser futura.";
    if (date < new Date("1900-01-01"))
      errors.birthdate = "La fecha no puede ser antigua a 1900-01-01.";
    if (isNaN(date)) errors.birthdate = "La fecha debe ser una fecha valida.";
  }

  //* DNI
  if (!input.nDni) errors.nDni = "Debe ingresar un DNI.";
  else {
    if (input.nDni.toString().length !== 8)
      errors.nDni = "El DNI debe tener 8 digitos.";
  }

  //* USERNAME
  input.username = input.username.trim();
  if (!input.username) errors.username = "Debe ingresar un username.";
  else {
    if (input.username.length < 3)
      errors.username = "El username debe tener al menos 3 carácteres.";
    if (input.username.length > 25)
      errors.username = "El username debe tener menos de 25 carácteres.";
  }

  //* PASSWORD
  if (!input.password) errors.password = "Debe ingresar una password.";
  else {
    if (input.password.length < 6)
      errors.password = "La password debe tener al menos 6 carácteres.";
    if (input.password.length > 15)
      errors.password = "La password debe tener menos de 15 carácteres.";
    if (!passMinRegExp.test(input.password))
      errors.password = "La password debe tener al menos una minúscula.";
    if (!passMayusRegExp.test(input.password))
      errors.password = "La password debe tener al menos una mayúscula.";
    if (!passNumRegExp.test(input.password))
      errors.password = "La password debe tener al menos un número.";
  }

  //* PASSWORD CONFIRM
  if (!input.passwordConfirm)
    errors.passwordConfirm = "Debe re-ingresar su contraseña.";
  else {
    if (input.password !== input.passwordConfirm)
      errors.passwordConfirm = "Las contraseñas no coinciden.";
  }

  return errors;
}

// console.log(
//   validateUser({
//     name: "Lucas",
//     email: "a@b.c",
//     birthdate: "01/01/2000",
//     nDni: 44444444,
//     username: "myxx",
//     password: "1234Abc",
//   })
// );
