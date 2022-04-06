import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { incNum, decNum } from './actions/index';

const ReactRedux = () => {
    const myState = useSelector((state) => state.changeTheNumber);
    // const show = useSelector((state) => state.changeTheNumber.toggle);
    // console.log(show);
    const dispatch = useDispatch();

    const increamentHandler = () => {
        dispatch({type: "INCR", payLoad: 5})
    }
    const decreamentHandler = () => {
        dispatch({type: "DECR"})
    }

    // const toggleCounter = () => {
    //     dispatch({type: "TOGGLE"})
    // }
  return (
    <>
        <div className="container text-center">
            <h2>Increament/Decreament using React redux</h2>
            <div className="row justify-content-center">
                <div className="col-4">
                    <h2>{myState.count}</h2>
                    <button className="btn btn-danger" type="button" onClick={decreamentHandler}>Decreament</button>
                    <button className="btn btn-success ms-3" type="button" onClick={increamentHandler}>Increament by 5</button>       
                    {/* <div className="mt-3">
                        <button className="btn btn-info" type="button" onClick={toggleCounter}>Toggle Counter</button>
                    </div>              */}
                </div>
            </div>
        </div>        
    </>
  )
}

export default ReactRedux