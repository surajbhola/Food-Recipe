import React from "react";
import classes from "./page.module.css";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
const MealDetailPage = ({ params }) => {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound(); //it will show closes not found or error page
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill></Image>
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailPage;
