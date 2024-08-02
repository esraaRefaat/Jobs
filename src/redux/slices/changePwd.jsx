import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const changePwd = createAsyncThunk(
  "pwd/changePwd",
  async ({ data, token }) => {
    const res = await axios.patch(
      "https://jobboardbackend-u9zm.onrender.com/api/v1/auth/changepassword/",
      {
        password: "123456@Ha",
        newPassword: "123456@Aa",
      },
      {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmE1NDFjZDJhYjM5MDRkMWZjYmZlZTciLCJyb2xlIjoiaHIiLCJlbWFpbCI6Im9tYXJAZ21haWwuY29tIiwiaWF0IjoxNzIyMTA2MzE3fQ.HWwenCVT3w95loZyw_ZeMBvh-gmb5yOj9pzbiXt8lMU",
        },
      }
    );
  }
);

const pwd = createSlice({
  name: "pwd",
  initialState: {
    pwd: {},
  },
  extraReducers: (builder) => {
    builder.addCase(changePwd.fulfilled, (state, action) => {
      state.pwd = action.payload;
    });
  },
});

