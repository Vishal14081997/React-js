import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        increment: (state, reqData) => {
            state.count += 1
            //   reqData = {payload:anyData}
        },
        decrement: (state) => {
            state.count -= 1
        },
    },
})

export const { increment, decrement } = cartSlice.actions

export default counterSlice.reducer