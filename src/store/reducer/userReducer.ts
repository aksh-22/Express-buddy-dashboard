import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/store/store";

export interface UserState {
  token: string;
  data: object;
}

const initialState = {
  token: null,
  data: null,
};

export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<any>) {
      state.token = action.payload;
    },
    setData(state, action: PayloadAction<any>) {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, setData } = userSlice.actions;

export default userSlice.reducer;

// Other code such as selectors can use the imported `RootState` type
export const selectToken = (state: RootState) => state.userReducer.token;
export const selectData = (state: RootState) => state.userReducer.data;
