import React from 'react'

const ExpenseDate = (props) => {
    const weekday = props.date.toLocaleString('en-US', {weekday : 'short'});
    const month = props.date.toLocaleString('en-US', {month : 'short'});
    const day = props.date.toLocaleString('en-US', {day : '2-digit'});
    const year = props.date.getFullYear();
  return (
    <>
        <div className='expense-list__date'>
            <div><strong>{weekday}</strong></div>
            <div>{month}</div>
            <div>{year}</div>
            <h2>{day}</h2>
        </div>
    </>
  )
}

export default ExpenseDate