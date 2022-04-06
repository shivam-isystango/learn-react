import React, { useReducer } from 'react'

const reduce = (state, action) => {
    if(action.type === "INCR"){
        return state = state + 1;
    }
    if(action.type === "DECR"){
        return state = state > 0 ? state - 1 : 0;
    }
    return state;
}
const UseReducer = () => {
    const [numberState, dispatchNumberState] = useReducer(reduce, 0)
    return (
        <>
            <div className="text-center">
                <h2>useRuducer Example</h2>
                <div>
                    <h3 className='text-primary'>{numberState}</h3>
                    <button className="btn btn-outline-success" onClick={() => dispatchNumberState({type : "INCR"})}>Increament</button>
                    <button className="btn btn-outline-danger ms-3" onClick={() => dispatchNumberState({type : "DECR"})}>Decreament</button>
                </div>
            </div>
        </>
    )
}

export default UseReducer