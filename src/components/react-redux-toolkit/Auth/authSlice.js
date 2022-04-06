import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authenticated: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn(state){
            state.authenticated = true
        },
        logOut(state){
            state.authenticated = false
        }
    }
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice;