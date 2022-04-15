import React from "react";
import Shop from "./Shop";
import { Provider } from "react-redux";
import store from "./store/store";

const ProductShop = () => {
  return (
    <Provider store={store}>
      <Shop />
    </Provider>
  );
};

export default ProductShop;
