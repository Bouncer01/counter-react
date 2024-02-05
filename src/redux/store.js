import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./reducer/counterSlice"

const store = configureStore({
    reducer:{
        counterSlice: counterSlice
    }
})

export default store