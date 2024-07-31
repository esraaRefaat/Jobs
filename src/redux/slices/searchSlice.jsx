import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const SearchAction = createAsyncThunk("search", async () => {
  const res = await axios.get(
    "https://jobboardbackend-u9zm.onrender.com/api/v1/jobs"
  );
  return res.data.document;
});

const searchSlice = createSlice({
    name: "jobs",
    initialState: { jobs: [], error: false, isLoading: false },
    extraReducers: (builder) => {
      builder
        .addCase(SearchAction.fulfilled, (state, action) => {
          state.jobs = action.payload;
          state.isLoading = false;
          state.error = false;
        })
        .addCase(SearchAction.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(SearchAction.rejected, (state, action) => {
          state.error = action.error.message;
          state.isLoading = false;
        });
    },
  });
export default searchSlice.reducer;
