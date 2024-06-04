export default function validateLoginUser(input) {
  const errors = {};

  input.username = input.username.trim();
  if (!input.username) errors.username = "Debe ingresar su username.";
  else {
    if (input.username.length < 3)
      errors.username = "El username debe tener al menos 3 carácteres.";
  }

  if (!input.password) errors.password = "Debe ingresar su contraseña.";
  else {
    if (input.password.length < 6)
      errors.password = "La contraseña debe tener al menos 6 carácteres.";
  }

  return errors;
}
