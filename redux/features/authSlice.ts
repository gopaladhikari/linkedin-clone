import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Payload = {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
};

type InitialState = {
  isLoggedIn: boolean;
} & Payload;

const initialState: InitialState = {
  isLoggedIn: false,
  uid: "",
  displayName: "",
  email: "",
  photoURL: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Payload>) => ({
      ...state,
      ...action.payload,
      isLoggedIn: true,
    }),

    logout: () => initialState,
  },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
