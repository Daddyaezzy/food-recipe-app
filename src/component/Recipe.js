import React from "react";
import style from "../styles/recipes.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.h1}>{title}</h1>
      <p>INGREDIENTS</p>
      <ol className={style.ol}>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p className={style.p}>{Math.floor(calories)} Calories</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
