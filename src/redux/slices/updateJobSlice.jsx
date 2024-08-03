import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateJobAction = createAsyncThunk(
  "updateJob",
  async ({ url,jobData, token }, { rejectWithValue }) => {
    try {
      console.log(url, token);
      const response = await axios.put(
        url,
        jobData,
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

const updateJobSlice = createSlice({
  name: "updateJob",
  initialState: {
    updateJob: null,
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateJobAction.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(updateJobAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.updateJob = action.payload;
      })
      .addCase(updateJobAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default updateJobSlice.reducer;
