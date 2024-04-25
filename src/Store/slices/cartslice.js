import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addtocart: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                // If item already exists, update its quantity
                state.cart = state.cart.map(item =>
                    item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                // If item does not exist, add it to the cart
                state.cart.push(action.payload);
            }
        },
        removefromcart: (state, action) => {
            // Remove item from cart based on its id
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
        increment: (state, action) => {
            state.cart = state.cart.map((item) =>
                item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
            );
        },
        decrement: (state, action) => {
            state.cart = state.cart.map((item) =>
                item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
            );
        }
    }
});

export const { addtocart, removefromcart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
