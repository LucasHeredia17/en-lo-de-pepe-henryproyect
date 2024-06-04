import { useState } from "react";
import axios from "axios";
import style from "./Login.module.css";
import validateLoginUser from "../../helpers/validateLoginUser";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    username: "",
    password: "",
  };

  const [input, setInput] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const loginUser = {
    username: input.username,
    password: input.password,
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
    setErrors(
      validateLoginUser({
        ...input,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users/login", loginUser)
      .then((res) => res.data)
      .then((data) => {
        dispatch(setUserData(data));
        alert(`¡Login completado con exito! ¡Bienvenido ${data.user.name}!`);
        navigate("/");
      })
      .catch((error) => {
        alert(`Acceso denegado: ${error?.response?.data?.message}`);
      });
  };

  return (
    <div className={style.container}>
      <div className={style.registerContainer}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h1 className={style.title}>Iniciar Sesión</h1>

          <div className={style.inputBox}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              name="username"
              value={input.username}
              type="text"
              placeholder="Ingresa tu username."
              onChange={handleChange}
            />
            <p>{errors.username && errors.username}</p>
          </div>

          <div className={style.inputBox}>
            <label htmlFor="password">Contraseña:</label>
            <input
              id="password"
              name="password"
              value={input.password}
              type="password"
              placeholder="Ingresa tu contraseña."
              onChange={handleChange}
            />
            <p>{errors.password && errors.password}</p>
          </div>

          <span className={style.span}>Todos los campos son obligatorios.</span>

          <button
            className={style.btn}
            type="submit"
            disabled={errors.username || errors.password}
          >
            Iniciar Sesión
          </button>
        </form>
        <div className={style.loginLink}>
          <p>
            ¿No tienes cuenta? <Link to={"/register"}>Registrate</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
