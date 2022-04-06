import React, { useState, useEffect } from 'react'

const Forms = () => {
    const [inputValue, setInputValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    
    const enteredNameIsValid = inputValue.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && isTouched;

    let formValid = false;
    if(enteredNameIsValid){
        formValid = true
    }
    
    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
    }
    const blurHandler = () => {
        setIsTouched(true);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setIsTouched(true);

        if(!enteredNameIsValid){
            return;
        }

        setIsTouched(false);
        setInputValue('');
    }
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <form action="" onSubmit={submitHandler}>
                        <div className='mb-3'>
                            <label>Your Name</label>
                            <input type="text" className="form-control" onChange={inputChangeHandler} onBlur={blurHandler} />
                            {nameInputIsInvalid && <small className="text-danger">Name not be empty</small>}
                        </div>
                        
                        <button className="btn btn-primary" type="submit" disabled={!formValid}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Forms