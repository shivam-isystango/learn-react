import React from "react";
import MealItem from "./MealItem";

const mealsData = [
  {
    id: "m1",
    name: "Meal 1",
    description: "lorem ipdum doller",
    price: 25,
  },
  {
    id: "m2",
    name: "Meal 2",
    description: "lorem ipdum doller",
    price: 45,
  },
  {
    id: "m3",
    name: "Meal 3",
    description: "lorem ipdum doller",
    price: 38,
  },
];

const AvailableMeals = () => {
  return (
    <>
      <div className="row">
        {mealsData.map((elem) => {
          return (
            <MealItem
              id={elem.id}
              name={elem.name}
              description={elem.description}
              price={elem.price}
              key={elem.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default AvailableMeals;
