import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const appSlice = createSlice({
  name: "appReducer",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setAuth } = appSlice.actions;

export default appSlice.reducer;
