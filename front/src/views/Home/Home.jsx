import axios from "axios";
import Meal from "../../components/Meal/Meal";
import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [comidas, setComidas] = useState([]);

  useEffect(() => {
    const getComidas = async () => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese"
        );
        setComidas(res.data.meals.slice(0, 9));
      } catch (error) {
        console.log(error);
      }
    };
    getComidas();
  }, [setComidas]);

  return (
    <>
      <h1 className={style.title}>¡Bienvenido a En Lo De Pepe!</h1>
      <h2 className={style.subtitle}>Estas son nuestas comidas principales:</h2>
      <div className={style.container}>
        {comidas.map((comida) => (
          <Meal
            key={comida.idMeal}
            name={comida.strMeal}
            image={comida.strMealThumb}
          />
        ))}
      </div>
      <footer className={style.footer}>
        Para hacer una reserva necesitas <Link to="/login">Iniciar Sesión</Link>
      </footer>
    </>
  );
};

export default Home;
