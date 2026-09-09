import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export let store = configureStore({
    reducer: {
        counterStore: counterSlice
    }
})