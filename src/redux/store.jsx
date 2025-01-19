import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "./loginSlice"
import registerReducer from "./registerSlice"
import cartReducer from "./cartSlice"
import userReducer from "./userSlice"

export const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
        cart: cartReducer,
        user: userReducer,
    },
})
