import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "Token",
  initialState: { token: {} },
  reducers: {
    getToken: function (state, action) {
      state.token = action.payload;
    },
  },
});
export const { getToken } = tokenSlice.actions;
export default tokenSlice.reducer;

