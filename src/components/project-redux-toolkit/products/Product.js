import React from "react";
import ProductItem from "./ProductItem";

const product = [
  {
    id: "p1",
    title: "Laptop",
    price: 25,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laborum aut voluptatum aspernatur quis accusamus.",
  },
  {
    id: "p2",
    title: "Computer",
    price: 60,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laborum aut voluptatum aspernatur quis accusamus.",
  },
  {
    id: "p3",
    title: "Keyboard",
    price: 15,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laborum aut voluptatum aspernatur quis accusamus.",
  },
];

const Product = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2>Products</h2>
        <button className="btn btn-primary">Add Product</button>
      </div>
      <div className="row">
        {product.map((elem) => {
          return (
            <ProductItem
              key={elem.id}
              id={elem.id}
              title={elem.title}
              description={elem.description}
              price={elem.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Product;
