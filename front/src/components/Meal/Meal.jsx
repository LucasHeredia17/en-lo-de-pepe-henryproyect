import React from "react";
import style from "./Meal.module.css";
const Meal = ({ name, image }) => {
  return (
    <div className={style.cardContainer}>
      <img src={image} alt={name} className={style.image} />
      <p className={style.title}>{name}</p>
    </div>
  );
};

export default Meal;
