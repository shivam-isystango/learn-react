import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../store/card-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };
  return (
    <>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <h4 className="text-primary">${props.price}</h4>
            <MealItemForm onAddToCart={addToCartHandler} />
          </div>
        </div>
      </div>
    </>
  );
};
export default MealItem;
