import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemTocart: (state, action) => {
      const newItem = action.payload;
      const itemIsExixting = state.items.find((item) => {
        return item.id === newItem.id;
      });
      state.quantity++;
      if (!itemIsExixting) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        itemIsExixting.totalPrice = itemIsExixting.totalPrice + newItem.price;
        itemIsExixting.quantity++;
      }
    },
    removeItemFromcart: (state, action) => {
      const id = action.payload;
      state.quantity--;
      const itemIsExisting = state.items.find((item) => item.id === id);
      if (itemIsExisting.quantity === 1) {
        state.items = state.items.filter((elem) => elem.id !== id);
      } else {
        itemIsExisting.totalPrice =
          itemIsExisting.totalPrice - itemIsExisting.price;
        itemIsExisting.quantity--;
      }
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
