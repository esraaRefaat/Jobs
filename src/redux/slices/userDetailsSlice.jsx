import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = `https://jobboardbackend-u9zm.onrender.com/api/v1/users`;

export const getUsers = createAsyncThunk("users/getUser", async () => {
  // let id = `/${id}`;
  // const res = await axios.get(baseURL + id);
  const res = await axios.get(baseURL);

  console.log('res',res.data)
  return res.data;
});

export const getUser = createAsyncThunk("users/getUser", async (id) => {
  // let id = `/${id}`;
  const res = await axios.get(baseURL + "/" + id);

  return res.data;
});

const fetchUser = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export default fetchUser.reducer;

