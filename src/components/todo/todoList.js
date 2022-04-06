import React, { useEffect, useState } from 'react'

const getLocalData = () => {
    const list = localStorage.getItem("todoList");

    if(list){
        return JSON.parse(list);
    }else{
        return []
    }
}

const TodoList = () => {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState(getLocalData());
    const [updateItem, setUpdateItem] = useState('');
    const [toggleButton, setToggleButton] = useState(false);

    // add items in list
    const addItem = () => {
        const updateItemList = {
            id : new Date().getTime().toString(),
            name: inputValue
        }
        if(!inputValue){
            alert("Please fill some data");
        }
        else if(inputValue && toggleButton){
            setItems(
                items.map((curElem)=>{
                    if(curElem.id === updateItem){
                        return {...curElem, name: inputValue}
                    }
                    else{
                        return curElem
                    }
                })
            )
            setUpdateItem('');
            setInputValue('');
            setToggleButton(false);
        }
        else{
            setItems([...items, updateItemList]);  
            setInputValue('');          
        }        
    }

    // edit item 
    const editItem = (elem) => {
        const updatedItem = items.find((curElem)=>{
            return curElem.id === elem
        });

        setUpdateItem(elem);
        setInputValue(updatedItem.name);
        setToggleButton(true);
    }

    // delete items in list
    const deletItem = (elem) => {
        const updatedData = items.filter((curElem)=>{
            return curElem.id !== elem
        });
        setItems(updatedData);
    }

    // delete All
    const deleteAll = () => {
        return setItems([]);
    }

    // set data in local storage 
    useEffect(()=>{
        localStorage.setItem("todoList", JSON.stringify(items))
    }, [items])
  return (
    <>
        <div className='todoList'>
            <div className='todoList-content'>
                <h4 className="text-center">Todo List</h4>
                <div className="todoList-input input-group mb-4">
                    <input className="form-control" type="text" placeholder='Add item' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
                    <button className="btn btn-outline-success" onClick={addItem}>
                        {
                            toggleButton ? "Update" : "Add"
                        }
                    </button>
                </div>

                <ul className="list-unstyled">
                    {
                        items.map((curElem)=>{
                            return(
                                <li key={curElem.id} className="d-flex justify-content-between align-items-center p-2 mb-2 rounded bg-dark text-white">
                                    <span className='item-name'>{curElem.name}</span>
                                    <div className='action'>
                                        <button className="btn btn-info" onClick={()=> editItem(curElem.id)}>Edit</button>
                                        <button className="btn btn-outline-danger ms-2" onClick={()=> deletItem(curElem.id)}>Delete</button>
                                    </div>
                                </li> 
                            )
                        })
                    }                    
                </ul>

                <div className="text-center">
                    <button className="btn btn-danger" onClick={deleteAll}>Delete All</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default TodoList