import React, { useState } from 'react';
import Header from './layout/Header';
import Meals from './Meals/Meals';
import CartItems from './Cart/CartItems';
import CartProvider from './store/CartProvider';

const ProjectFood = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true)
  }
  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  return ( 
    <>
      <CartProvider>
        <Header onShowCart={showCartHandler} />
        <main>
            <div className='container'>
                <Meals />
            </div>
        </main>
        {cartIsShown && <CartItems onHideCart={hideCartHandler} />}
      </CartProvider>
    </>
  )
}

export default ProjectFood