import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: false,
    userData: null,
}

const Authslice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action){
            state.user = true
            state.userData = action.payload
        },
        logout(state){
            state.user = false
            state.userData = null
        },
    }
})

export const {login, logout} = Authslice.actions

export default Authslice.reducer