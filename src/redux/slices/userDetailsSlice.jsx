import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = `https://jobboardbackend-u9zm.onrender.com/api/v1/users`;
const updateURL = `https://jobboardbackend-u9zm.onrender.com/api/v1/users/`;

export const getUsers = createAsyncThunk("users/getUser", async () => {
  // let id = `/${id}`;
  // const res = await axios.get(baseURL + id);
  const res = await axios.get(baseURL);

  return res.data;
});

export const getUser = createAsyncThunk("users/getUser", async (id) => {
  // let id = `/${id}`;
  const res = await axios.get(baseURL + "/" + id);

  return res.data;
});

export const updateUser = createAsyncThunk(
  "users/updateUsers",
  async ({ data, tokenValue }) => {
    const headers = {
      token: tokenValue,
    };
    const res = await axios.put(updateURL, JSON.stringify(data), {
      header: { headers },
    });
    // const res = await fetch(updateURL, {
    //   method: "PUT",
    //   headers: {
    //     token: tokenValue,
    //   },
    //   body: { name: "omar" },
    // });
    // const resdata = await res.json();

    return res.data;
    // return resdata;
  }
);

const fetchUser = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.users = action.payload;
      });
  },
});

export default fetchUser.reducer;

