import React, { useState } from "react";
import Layout from "./layout/Layout";
import Product from "./products/Product";
import Cart from "./cart/Cart";
import AddProduct from "./add-product/AddProduct";

const Shop = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };
  return (
    <>
      <AddProduct />
      <Layout showModal={showModalHandler}>
        <Product showModal={showModalHandler} />
      </Layout>

      {showModal && <Cart hideModal={hideModalHandler} />}
    </>
  );
};

export default Shop;
