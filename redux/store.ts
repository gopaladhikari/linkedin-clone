import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { authReducer } from "./features/authSlice";

export const store = configureStore({
  reducer: {
    authReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
