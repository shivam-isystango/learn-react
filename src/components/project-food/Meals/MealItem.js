import React, { useContext} from 'react';
import MealItemForm from './MealItemForm';
import CartContext from '../store/card-context';

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addTocartHandler = amount => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }
  return (
    <>
        <div className='col-lg-4'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>  
                    <h4 className='text-primary'>{price}</h4>     
                    <MealItemForm OnAddToCart={addTocartHandler} />                                                         
                </div>
            </div>
        </div>
    </>
  )
}
export default MealItem
