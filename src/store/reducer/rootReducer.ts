import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./appReducer";
import userReducer from "./userReducer";
import { store } from "../store";

const rootReducer = combineReducers({
  appReducer,
  userReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
