import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo2.png";
import Button from "./Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserData, setUserAppointments } from "../../redux/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
      <nav className={styles.navbar}>
        <NavLink
          to={"/"}
          className={styles.navbar_logo}
          onClick={closeMobileMenu}
        >
          <img src={logo} alt="" className={styles.logo} />
        </NavLink>

        <div className={styles.menu_icon} onClick={handleClick}>
          <i
            className={click ? "fas fa-times" : "fas fa-bars"}
            style={{ color: "white", fontSize: "2rem" }}
          />
        </div>

        <ul
          className={
            click
              ? `${styles.nav_menu_active} ${login ? styles.logged_in : ""}`
              : styles.nav_menu
          }
        >
          <li className={styles.nav_item}>
            <NavLink
              to={"/"}
              className={styles.nav_links}
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>

          <li className={styles.nav_item}>
            <NavLink
              to={"/about"}
              className={styles.nav_links}
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>

          {login && (
            <li className={styles.nav_item}>
              <NavLink
                to={"/my-appointments"}
                className={styles.nav_links}
                onClick={closeMobileMenu}
              >
                Mis Turnos
              </NavLink>
            </li>
          )}

          {login ? (
            <li className={styles.nav_item}>
              <NavLink
                to={"/form-appointments"}
                className={`${styles.nav_links} ${styles.logout}`}
                onClick={closeMobileMenu}
              >
                Crear Turno
              </NavLink>
            </li>
          ) : (
            <li className={styles.nav_item}>
              <NavLink
                to={"/login"}
                className={styles.nav_links}
                onClick={closeMobileMenu}
              >
                Iniciar Sesión
              </NavLink>
            </li>
          )}

          {login ? (
            <span
              className={styles.nav_links_mobile + " " + styles.logout}
              onClick={closeMobileMenu && handleLogout}
            >
              Cerrar Sesión
            </span>
          ) : (
            <li>
              <NavLink
                to={"/register"}
                className={styles.nav_links_mobile}
                onClick={closeMobileMenu}
              >
                Registarme
              </NavLink>
            </li>
          )}
        </ul>

        <Button className={styles.button} />
      </nav>
    </>
  );
};

export default Navbar;
