import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: '', // Initialize search state with an empty string
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  }
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
