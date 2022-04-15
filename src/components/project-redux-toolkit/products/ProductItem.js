import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cartSlice";

const ProductItem = ({ title, description, price, id }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartAction.addItemTocart({
        id,
        title,
        price,
      })
    );
  };
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h5>{title}</h5>
          </div>
          <p>{description}</p>
          <div className="d-flex align-items-center justify-content-between">
            <strong>${price.toFixed(2)}</strong>
            <button className="btn btn-primary" onClick={addToCart}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
