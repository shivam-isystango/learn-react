import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, price, totalPrice, id } = props.items;

  const addItem = () => {
    dispatch(
      cartAction.addItemTocart({
        id,
        title,
        price,
      })
    );
  };

  const removeItem = () => {
    dispatch(cartAction.removeItemFromcart(id));
  };
  return (
    <li className="py-3 border-bottom d-flex justify-content-between align-items-center">
      <div>
        <h5>{title}</h5>
        <em>x{quantity}</em>
      </div>
      <div className="text-end">
        <h5>
          {totalPrice} ({price}/item)
        </h5>
        <button className="btn btn-outline-danger btn-sm" onClick={removeItem}>
          -
        </button>
        <button
          className="btn btn-outline-success btn-sm ms-2"
          onClick={addItem}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
