import React from "react";
import { useSelector } from "react-redux";

const Header = (props) => {
  const qauntity = useSelector((state) => state.cart.quantity);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand">Shop</a>
        <button className="btn btn-primary" onClick={props.showModal}>
          Cart <span className="badge bg-success">{qauntity}</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
