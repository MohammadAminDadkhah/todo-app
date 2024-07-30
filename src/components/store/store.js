import { configureStore } from '@reduxjs/toolkit'
import user from "./setLoginUser";

export default configureStore({
    reducer: {
        login: user
    }
})