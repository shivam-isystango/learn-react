import React, { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const amountRef = useRef();
  const submitFormHandler = (e) => {
    // alert("working");
    e.preventDefault();

    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <>
      <form action="" onSubmit={submitFormHandler}>
        <div className="input-group">
          <input
            ref={amountRef}
            type="number"
            className="form-control"
            min={1}
            defaultValue={1}
          />
          <button className="btn btn-outline-secondary">+ Add</button>
        </div>
        {!amountValid && (
          <small className="text-danger">
            Please enter valid amount (1 - 5)
          </small>
        )}
      </form>
    </>
  );
};

export default MealItemForm;
