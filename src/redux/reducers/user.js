import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login: (state, action) => {
      return (state = action.payload);
    },
    logout: (state) => {
      return (state = {});
    },
    updateUser: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;
export const user = userSlice.reducer;
