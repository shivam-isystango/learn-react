import React,{ useRef } from 'react';

const TaskForm = (props) => {
    const inputValueRef = useRef();

    const submitTaskHandler = (e) => {
        e.preventDefault();

        const inputValue = inputValueRef.current.value;

        if(inputValue.trim().length > 0){
            props.getInputValue(inputValue);
        }
    }
  return (
    <>
        <form action="" onSubmit={submitTaskHandler}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Add Task" ref={inputValueRef} />
                <button type="submit" className="btn btn-success border-0">Button</button>
            </div>
        </form>
    </>
  )
}

export default TaskForm