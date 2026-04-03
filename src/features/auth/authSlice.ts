"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { LoginResponse } from "@/models/response/userResponses";

type AuthState = {
  user: LoginResponse | null;
  token: string | null;
};

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<LoginResponse>) => {
      state.user = action.payload;
      state.token = action.payload.token ?? null;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const selectCurrentUser = (state: { auth: AuthState }) => state.auth.user;
export const selectToken = (state: { auth: AuthState }) => state.auth.token;

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;