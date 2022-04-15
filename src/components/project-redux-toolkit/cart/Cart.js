import React from "react";
import CartItem from "./CartItem";
import Modal from "../modal/Modal";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItem = useSelector((state) => state.cart.items);

  return (
    <Modal title="Cart" hideModal={props.hideModal}>
      {cartItem.length < 1 ? (
        <p className="text-center">
          <strong>No product found in cart!</strong>
        </p>
      ) : (
        <ul className="list-unstyled">
          {cartItem.map((product) => {
            return (
              <CartItem
                key={product.id}
                items={{
                  id: product.id,
                  title: product.title,
                  quantity: product.quantity,
                  price: product.price,
                  totalPrice: product.totalPrice,
                }}
              />
            );
          })}
        </ul>
      )}
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={props.hideModal}
        >
          Close
        </button>
        {/* <button type="button" className="btn btn-primary ms-3">
          Save changes
        </button> */}
      </div>
    </Modal>
  );
};

export default Cart;
