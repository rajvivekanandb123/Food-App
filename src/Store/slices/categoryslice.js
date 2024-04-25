import { createSlice } from "@reduxjs/toolkit";
import cartslice from "./cartslice";

const catslice = createSlice({
    name: 'category',
    initialState: {
        category:'All'
    },
    reducers: {
        setcategory: (state, action) => {
            state.category = action.payload
        }
    }
});

export const { setcategory } = catslice.actions;
export default catslice.reducer;
