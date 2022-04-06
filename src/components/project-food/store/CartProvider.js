import React, { useReducer } from 'react';
import CartContext from './card-context';

const defaultState = {
  items: [],
  totalAmount: 0
}
const cartReducer = (state, action) => {
  if(action.type === "ADD"){
    const updatedItems = state.items.concat(action.item);
    const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedAmount
    }
  }
  return defaultState;
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

    const addItemToCart = (item) => {
      dispatchCartAction({type: "ADD", item: item})
    };
    const removeItemsFromCart = (id) => {
      dispatchCartAction({type: "REMOVE", id: id})
    };
    
    const context = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemsFromCart
    }
  return (
    <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider