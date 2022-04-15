import React from 'react'
import CartModal from './CartModal'

const CartItems = (props) => {
    const cartItems = [
        {
            id: 'c1',
            name: 'Meal 1',
            description: 'lorem ipdum doller',
            price: 25
        }
    ]
  return (
    <>
        <CartModal title='Cart' closeModal={props.onHideCart}>
            <ul className='list-unstyled'>
                {
                cartItems.map((elem) => {
                    return <li className='py-2 border-bottom' key={elem.id}>
                        <div className='d-flex justify-content-between align-item-center'>
                            <div>{elem.name}</div>
                            <span>${elem.price}</span>
                        </div>
                    </li>
                }) 
                }
            </ul>
            <div>
                <h6 className='d-flex justify-content-between'>
                    <div>Total Amount</div>
                    <div>$35</div>
                </h6>
                <div className='actions mt-3 d-flex justify-content-end'>
                    <button className='btn btn-sm btn-danger' onClick={props.onHideCart}>Close</button>
                    <button className='btn btn-sm btn-success'>Order</button>
                </div>
            </div>
        </CartModal>
    </>
  )
}

export default CartItems