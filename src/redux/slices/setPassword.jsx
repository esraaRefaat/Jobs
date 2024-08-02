import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setPasswordAction = createAsyncThunk(
  "SetPasswerd",
  async ({ userData, url }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(url, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const setPasswordSlice = createSlice({
  name: "SetPasswerd",
  initialState: {
    message:'',
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(setPasswordAction.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(setPasswordAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
            })
      .addCase(setPasswordAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default setPasswordSlice.reducer;


