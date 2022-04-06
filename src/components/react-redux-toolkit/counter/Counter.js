import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, toggleCounter } from "./counterSlice";

const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const toggle = useSelector(state => state.counter.toggleCounter);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="text-center bg-light py-4">
                <h1 className="my-5">Counter using react redux toolkit</h1>
                <div className="d-inline-block bg-light p-4">
                    {toggle && <h3>{count}</h3>}
                    <button
                    aria-label="Increment value"
                    className="btn btn-success"
                    onClick={() => dispatch(increment())}
                    >
                    Increment
                    </button>
                    <button
                    aria-label="Decrement value"
                    className="btn btn-danger ms-3"
                    onClick={() => dispatch(decrement())}
                    >
                    Decrement
                    </button>

                    <div className="mt-3">  
                        <button
                        aria-label="Decrement value"
                        className="btn btn-primary"
                        onClick={() => dispatch(incrementByAmount(5))}
                        >
                        Increment by 5
                        </button>
                    </div>

                    <div className="mt-3">  
                        <button
                        aria-label="Decrement value"
                        className="btn btn-secondary"
                        onClick={() => dispatch(toggleCounter())}
                        >
                        Toggle
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter;