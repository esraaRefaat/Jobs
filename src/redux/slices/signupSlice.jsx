import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUpAction = createAsyncThunk(
  "auth",
  async ({ userData, url }, { rejectWithValue }) => {
    try {
      const response = await axios.post(url, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user:{},
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpAction.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(signUpAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
            })
      .addCase(signUpAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;


