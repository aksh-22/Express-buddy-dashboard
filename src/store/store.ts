import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducer/rootReducer";

const persistConfig = {
  key: "root",
  storage,
};

const root_reducer = (state: any, action: any) => {
  try {
    const reduxState = state;
    if (action.type === "CLEAR_REDUX") {
      for (const [key] of Object.entries(reduxState)) {
        reduxState[key] = undefined;
      }
      state = reduxState;
    }
    return rootReducer(state, action);
  } catch (error) {
    console.error("root_reducer", error);
  }
};

const persistedReducer = persistReducer(persistConfig, root_reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
