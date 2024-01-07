import { createSlice } from "@reduxjs/toolkit";

// initial state properties for the user slice
const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // reducer functions here
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Destructuring to get the reducer and actions
const { reducer, actions } = userSlice;

// Accessing & exporting the reducer and actions
export const { setUser } = actions;
export default reducer;
