import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk(
  "authlogin",
  async ({ userData, url }, { rejectWithValue }) => {
    try {
      const response = await axios.post(url, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authloginSlice = createSlice({
  name: "authlogin",
  initialState: {
    loginInfo:{},
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loginInfo = action.payload;
        state.user = action.payload;
            })
      .addCase(loginAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authloginSlice.reducer;


