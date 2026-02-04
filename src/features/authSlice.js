import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },

    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },

    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },

    setAuthError: (state, action) => {
      state.error = action.payload;
    },

    clearAuthError: (state) => {
      state.error = null;
    },
  },
});

export const {
  loginUser,
  logoutUser,
  updateUser,
  setAuthError,
  clearAuthError,
} = authSlice.actions;
export default authSlice.reducer;
