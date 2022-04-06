import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    toggleCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state){
            state.value++
        },
        decrement(state){
            state.value > 0 && state.value--
        },
        incrementByAmount(state, action){
            state.value = state.value + action.payload
        },
        toggleCounter(state){
            state.toggleCounter = !state.toggleCounter
        }
    }
});

export const { increment, decrement, incrementByAmount, toggleCounter } = counterSlice.actions;
export default counterSlice