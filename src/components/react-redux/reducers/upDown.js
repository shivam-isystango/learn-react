let initialState = { count: 0 };

const changeTheNumber = (state = initialState, action) => {
    switch(action.type){
        case "INCR" : return {
            count: state.count + action.payLoad,
            // toggle: state.toggleCounter
        };
        case "DECR" : return {
            count: state.count - 1,
            // toggle: state.toggleCounter
        };
        case "TOGGLE" : return {
            count: state.count,
            // toggle: !state.toggleCounter,
        };
        default: return {
            count: state.count,
            // toggle: state.toggleCounter
        };
    }
}

export default changeTheNumber;