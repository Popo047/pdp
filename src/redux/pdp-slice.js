import { createSlice } from "@reduxjs/toolkit";

const pdpSlice = createSlice({
  name: "PDP",
  initialState: {
    fetchedData: {},
    toggle: false,
  },
  reducers: {
    toggleView(state) {
      state.toggle = !state.toggle;
    },
    fetchData(state, action) {
      state.fetchedData = action.payload;
    },
  },
});

export const pdpActions = pdpSlice.actions;

export default pdpSlice.reducer;
