import React, { useState, useRef }  from 'react';

const AddExpence = (props) => {
    const titleRef = useRef();
    const amountRef = useRef();
    const dateRef = useRef();

    // const [inputTitle, setInputTitle] = useState('');
    // const [inputAmount, setInputAmount] = useState('');
    // const [inputDate, setInputDate] = useState('');

    // const inputTitleHandler = (e) => {
    //     setInputTitle(e.target.value)
    // };
    // const inputAmountHandler = (e) => {
    //     setInputAmount(e.target.value)
    // };
    // const inputDateHandler = (e) => {
    //     setInputDate(e.target.value)
    // };
    
    const submitHandler = (e) => {
        e.preventDefault();
        const inputTitleRef = titleRef.current.value;
        const inputAmountRef = amountRef.current.value;
        const inputDateRef = dateRef.current.value;

        const expensedata = {
            name : inputTitleRef,
            amount: inputAmountRef,
            date: new Date(inputDateRef)
        }
        onSaveExpenseData(expensedata);
        // setInputTitle('');
        // setInputAmount('');
        // setInputDate('');

        titleRef.current.value = '';
        amountRef.current.value = '';
        dateRef.current.value = '';
    };

    const onSaveExpenseData = (exdata) => {
        const saveExpensedata = {
            ...exdata,
            id : Math.random().toString()
        }
        props.onAddExpense(saveExpensedata);
    };
    
  return (
    <>
        <div className='addExpense'>
            <form onSubmit={submitHandler}>
                <label>Title</label><br />
                <input type="text" className='form-control' ref={titleRef} />
                <br /><br />
                <label>Amount</label><br />
                <input type="number" className='form-control' ref={amountRef} />
                <br /><br />
                <label>Date</label><br />
                <input type="date" className='form-control' ref={dateRef} />
                <br /><br />
                <button type='submit' className='btn-primary'>Add Expense</button>
            </form>
        </div>
    </>
  )
}

export default AddExpence