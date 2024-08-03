import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const jobInfoAction = createAsyncThunk("jobInfo", async (url) => {
  const res = await axios.get(url);
  return res.data.document[0];
});

const jobInfoSlice = createSlice({
  name: "jobInfo",
  initialState: { jobInfo: null, error: false, isLoading: false },
  extraReducers: (builder) => {
    builder
      .addCase(jobInfoAction.fulfilled, (state, action) => {
        state.jobInfo = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(jobInfoAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(jobInfoAction.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});
export default jobInfoSlice.reducer;
