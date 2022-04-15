import React, { useContext } from "react";
import CartContext from "../store/card-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  console.log(ctx.items);
  const cartNumber = ctx.items.reduce((curNum, items) => {
    return curNum + items.amount;
  }, 0);
  return (
    <button
      className="btn btn-primary position-relative"
      onClick={props.onClick}
    >
      Cart
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {cartNumber}
      </span>
    </button>
  );
};

export default HeaderCartButton;
