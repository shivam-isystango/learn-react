import React, { useState, useEffect } from 'react';
import Data from './Data';
import List from './List';
import AddExpence from './AddExpence';
import './expense.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = () => {

    const [expenses, setExpenses] = useState(Data);
    const [selectYear, setSelectYear] = useState('');

    const filterByYear = [...new Set(Data.map(elem => {
        return elem.date.getFullYear();
    }))];

    const addExpenseHandler = (addedData) => {
        setExpenses([addedData, ...expenses]);
    }

   
    const filterByYearHandler = (e) =>{
        setSelectYear(e.target.value);
    }
    
    const filterData = expenses.filter(elem => {
        return elem.date.getFullYear().toString() === selectYear
    });
    

    
    // console.log(month);
  return (
    <>
        <AddExpence onAddExpense={addExpenseHandler} />
        <List className='expenses'>
            <select onChange={filterByYearHandler}>
                {filterByYear.map(elem=>{
                    return <option value={elem}>{elem}</option>
                })}
            </select>
            {
                filterData.map((elem) => {    
                    return (
                        <>
                            <List className="expense-list" key={elem.id}>
                                <ExpenseDate date={elem.date} />
                                <h3 className='expense-list__title'>{elem.name}</h3>
                                <div className='expense-list__price'>${elem.amount}</div>
                            </List>
                        </>
                    )
                })
            }
        </List>
    </>
  )
}

export default ExpenseItem