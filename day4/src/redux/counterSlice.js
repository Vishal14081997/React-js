import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 10
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

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer