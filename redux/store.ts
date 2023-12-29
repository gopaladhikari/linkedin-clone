import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { authReducer } from "./features/authSlice";

export const store = configureStore({
  reducer: {
    authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useSelector;
