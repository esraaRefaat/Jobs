import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const changePwd = createAsyncThunk(
  "pwd/changePwd",
  async ({ data, token }) => {
    const res = await axios.patch(
      "https://jobboardbackend-u9zm.onrender.com/api/v1/auth/changepassword/",
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

const pwd = createSlice({
  name: "pwd",
  initialState: {
    pwd: {},
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
export default pwd.reducer;

