import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteJobAction = createAsyncThunk(
  "deleteJob",
  async ({ url, token }, { rejectWithValue }) => {
    try {
      console.log(url, token);
      const response = await axios.delete(
        url,
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

const deleteJobSlice = createSlice({
  name: "deleteJob",
  initialState: {
    deleteJob: null,
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteJobAction.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(deleteJobAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deleteJob = action.payload;
      })
      .addCase(deleteJobAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default deleteJobSlice.reducer;
