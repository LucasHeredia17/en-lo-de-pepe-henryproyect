import React from "react";
import styles from "./Button.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments, setUserData } from "../../redux/userSlice";

const Button = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useSelector((state) => state.actualUser.userData.login);

  const handleLogout = () => {
    const confirmed = window.confirm("¿Deseas cerrar sesión?");
    if (confirmed) {
      dispatch(setUserData({}));
      dispatch(setUserAppointments([]));
      navigate("/");
    }
  };

  return (
    <>
      {login ? (
        <span onClick={handleLogout}>
          <button className={styles.btnLogout}>Cerrar Sesión</button>
        </span>
      ) : (
        <NavLink to={"/register"}>
          <button className={styles.btn}>Registrarme</button>
        </NavLink>
      )}
    </>
  );
};

export default Button;
