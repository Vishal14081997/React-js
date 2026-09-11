import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: localStorage.getItem('CART') ? JSON.parse(localStorage.getItem("CART")) : []
    },
    reducers: {
        addToCart: (state, reqData) => {
            // console.log(reqData.payload);
            let { cartObj } = reqData.payload;
            state.cart = [...state.cart, cartObj]
            localStorage.setItem("CART", JSON.stringify(state.cart))
        },
        deleteCart: (state, reqData) => {
            //    console.log(reqData.payload); 
            let id = reqData.payload
            // console.log(id);
            state.cart = state.cart.filter((item) => item.id !== id)
            localStorage.setItem("CART", JSON.stringify(state.cart))
        },
        changeQty: (state) => {

        },
    },
})

export const { addToCart, deleteCart, changeQty } = cartSlice.actions

export default cartSlice.reducer