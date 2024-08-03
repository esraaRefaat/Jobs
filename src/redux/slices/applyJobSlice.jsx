import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const applyJobAction = createAsyncThunk(
  "applyJob",
  async ({ url, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        url,
        {},
        {
          headers: {
            "token": token,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const applyJobSlice = createSlice({
  name: "applyJob",
  initialState: {
    applyJob: null,
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(applyJobAction.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(applyJobAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.applyJob = action.payload;
      })
      .addCase(applyJobAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default applyJobSlice.reducer;
