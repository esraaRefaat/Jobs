import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addJob = createAsyncThunk(
  "job/addJob",
  async ({ data, token }) => {
    const res = await axios.post(
      "https://jobboardbackend-u9zm.onrender.com/api/v1/jobs/",
      data,
      {
        headers: {
          token: token,
        },
      }
    );
    console.log(res.data);
    return res.data;
  }
);

const job = createSlice({
  name: "job",
  initialState: {
    job: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changePwd.pending, (state) => {
        state.status = "loading";
      })
      .addCase(changePwd.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pwd = action.payload;
      })
      .addCase(changePwd.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default job.reducer;

