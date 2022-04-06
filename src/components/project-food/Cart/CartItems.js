import React, { useContext } from 'react';
import CartModal from './CartModal';
import CartContext from '../store/card-context';

const CartItems = (props) => {
    const ctx = useContext(CartContext);

    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
    // const hasItems = ctx.totalAmount.length > 0;
    // const cartItems = [
    //     {
    //         id: 'c1',
    //         name: 'Meal 1',
    //         description: 'lorem ipdum doller',
    //         price: 25,
    //         amount: 2
    //     }
    // ]
  return (
    <>
        <CartModal title='Cart' closeModal={props.onHideCart}>
            <ul className='list-unstyled'>
                {
                ctx.items.map((elem) => {
                    return <li className='py-2 border-bottom' key={elem.id}>
                        <div className='d-flex justify-content-between align-item-center'>
                            <div>
                                <h6>{elem.name}</h6>
                                <span>${elem.price.toFixed(2)}</span>
                            </div>
                        </div>
                    </li>
                }) 
                }
            </ul>
            <div>
                <h6 className='d-flex justify-content-between'>
                    <div>Total Amount</div>
                    <div>{totalAmount}</div>
                </h6>
                <div className='actions mt-3 d-flex justify-content-end'>
                    <button className='btn btn-sm btn-danger' onClick={props.onHideCart}>Close</button>
                    {/* {hasItems && <button className='btn btn-sm btn-success ms-2'>Order</button>} */}
                    <button className='btn btn-sm btn-success ms-2'>Order</button>
                </div>
            </div>
        </CartModal>
    </>
  )
}

export default CartItems