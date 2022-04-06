import React, { useState } from 'react'

const Card = () => {
    const [name, setName] = useState('Shivam Gour');
    const [inputValue, setInputValue] = useState('');

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    const updateName = (e) => {
        e.preventDefault();
        setName(inputValue);
        setInputValue('');
    }
  return (
    <>
    <p>Hello, {name}!</p>
      <div className='d-flex col-3'>
        <input className="form-control" type="text" value={inputValue} onChange={handleInput} />
        <button className="btn btn-outline-primary" onClick={updateName}>Save</button>
      </div>

    </>
  )
}

export default Card