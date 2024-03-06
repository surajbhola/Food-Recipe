import React from "react";
import classes from "./meals-grid.module.css";
import MealItem from "./meal-item";

const MealsGrid = ({ meals }) => {
  return (
    <div className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal}></MealItem>
        </li>
      ))}
    </div>
  );
};

export default MealsGrid;
