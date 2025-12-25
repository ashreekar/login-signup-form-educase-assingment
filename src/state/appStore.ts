import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.slice";

export const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Types for hooks
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;