import {createSlice} from '@reduxjs/toolkit'

const localstorage = localStorage.getItem('loginUser');

const initialState = localstorage ? JSON.parse(localstorage) : {
    username: "",
    password: "",
    age: 0,
};

export const user = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginCurrentUser: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.age = action.payload.age;
        }
    }
})

export const {setLoginCurrentUser} = user.actions
export default user.reducer