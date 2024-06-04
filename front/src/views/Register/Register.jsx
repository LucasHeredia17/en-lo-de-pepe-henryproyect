import { useState } from "react";
import axios from "axios";
import validateUser from "../../helpers/validateUser";
import style from "./Register.module.css";
import formData from "../../helpers/formData";
import { Link } from "react-router-dom";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    birthdate: Date,
    nDni: Number,
    username: "",
    password: "",
    passwordConfirm: "",
  };

  const [input, setInput] = useState(initialState);
  const [errors, setErrors] = useState({
    name: "Debe ingresar un nombre.",
    email: "Debe ingresar un email.",
    birthdate: "Debe ingresar un cumpleaños.",
    nDni: "Debe ingresar un DNI.",
    username: "Debe ingresar un nombre de usuario.",
    password: "Debe ingresar una contraseña.",
    passwordConfirm: "Debe re-ingresar su contraseña.",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
    setErrors(
      validateUser({
        ...input,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name: input.name,
      email: input.email,
      birthdate: input.birthdate,
      nDni: input.nDni,
      username: input.username,
      password: input.password,
    };
    axios
      .post("http://localhost:3000/users/register", newUser)
      .then(({ data }) => {
        alert(`¡Registro completado con exito! ¡Bienvenido ${data.name}!`);
        setInput(initialState);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className={style.container}>
      <div className={style.registerContainer}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h1 className={style.title}>Registrate</h1>

          {formData.map(({ label, name, type, placeholder }) => {
            return (
              <div className={style.inputBox} key={name}>
                <label htmlFor={name}>{label}</label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  value={input[name]}
                  placeholder={placeholder}
                  onChange={handleChange}
                />
                <p className={style.error}>{errors[name] && errors[name]}</p>
              </div>
            );
          })}

          <span className={style.span}>Todos los campos son obligatorios.</span>

          <button
            className={style.btn}
            type="submit"
            disabled={
              errors.name ||
              errors.email ||
              errors.birthdate ||
              errors.nDni ||
              errors.username ||
              errors.password ||
              errors.passwordConfirm
            }
          >
            Registrarme
          </button>
        </form>
        <div className={style.loginLink}>
          <p>
            ¿Ya tiene una cuenta? <Link to="/login">Inicia Sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
