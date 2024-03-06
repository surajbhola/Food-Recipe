import React, { Suspense } from "react";
import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community.",
};
async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals}></MealsGrid>;
}

const MealPage = async () => {
  // we can add async to these component as they are server component

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching Meals...</p>}
        >
          {" "}
          {/* handles loading state and fall back screen*/}
          <Meals></Meals>
        </Suspense>
      </main>
    </>
  );
};

export default MealPage;
