import React, { useRef, useState } from 'react';

const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const inputValue = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const inputAmount = inputValue.current.value;
    const inputAmountToNumber = +inputAmount;

    if(inputAmount.trim().length === 0 || inputAmountToNumber < 0 || inputAmountToNumber > 5){
      setIsValid(false);
      return;
    }

    props.OnAddToCart(inputAmountToNumber);
  }
  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <div className="input-group align-items-center">
            <strong className="w-50">Amount</strong>
            <input ref={inputValue} type="number" className="form-control" min={1} max={5} defaultValue={1} step={1} />
            <button className="btn btn-outline-secondary">+ Add</button>
        </div>
          {!isValid && <p className="text-end text-danger mb-0"><small>Please enter valid amount</small></p>}
      </form>
    </>
  )
}

export default MealItemForm