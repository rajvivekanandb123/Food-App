import { configureStore } from "@reduxjs/toolkit";
import cartsl from '/home/raju/Desktop/food-app/src/Store/slices/cartslice.js';
import catslice from '/home/raju/Desktop/food-app/src/Store/slices/categoryslice.js';
import searchslice from "/home/raju/Desktop/food-app/src/Store/slices/searchslice.js";
const  Store =configureStore({
   reducer:{
      cart:cartsl,
      category:catslice,
      search:searchslice,
   }
})
export default Store