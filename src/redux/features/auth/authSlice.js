import { createSlice } from '@reduxjs/toolkit'

const name = JSON.parse(localStorage.getItem("name")) || null
const initialState = {
    isLoggedIn: false,
    name:name ? name : "",
    user: {
        name: "",
        email:"",
        bio:"",
        photo:"",
        phone:""
    }
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_LOGIN(state, action){
            state.isLoggedIn = action.payload
            localStorage.setItem("name", JSON.stringify(action.payload))
        },
        SET_NAME(state, action){
            state.name = action.payload
        },
        SET_USER(state, action){
            const profile = action.payload;
            state.user.name = profile.name;
            state.user.email = profile.email;
            state.user.phone = profile.phone;
            state.user.photo = profile.photo;
            state.user.bio = profile.bio;
        },

    },
});

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn
export const { SET_LOGIN, SET_NAME, SET_USER} = authSlice.actions;
export const selectName = (state) => state.auth.name
export const selectUser = (state) => state.auth.user

export default authSlice.reducer
