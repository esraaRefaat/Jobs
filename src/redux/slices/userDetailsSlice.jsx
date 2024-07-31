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

// export const updateUser = createAsyncThunk("users/updateUsers", async () => {
//   const res = await axios.put(
//     "https://jobboardbackend-u9zm.onrender.com/api/v1/users/",
//     {
//       name: "Haaady yasser",
//     },
//     {
//       header: {
//         token:
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmE1NDFjZDJhYjM5MDRkMWZjYmZlZTciLCJyb2xlIjoiaHIiLCJlbWFpbCI6Im9tYXJAZ21haWwuY29tIiwiaWF0IjoxNzIyMTA2MzE3fQ.HWwenCVT3w95loZyw_ZeMBvh-gmb5yOj9pzbiXt8lMU",
//       },
//     }
//   );

//   // const res = await fetch(updateURL, {
//   //   method: "PUT",
//   //   headers: {
//   //     token: tokenValue,
//   //   },
//   //   body: { name: "omar" },
//   // });
//   // const resdata = await res.json();

//   return res.data;
//   // return resdata;
// });

export const updateUser = createAsyncThunk(
  "favMovieList",
  async ({ data, token }) => {
    const response = await axios.put(
      "https://jobboardbackend-u9zm.onrender.com/api/v1/users/",
      data,
      {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmE1NDFjZDJhYjM5MDRkMWZjYmZlZTciLCJyb2xlIjoiaHIiLCJlbWFpbCI6Im9tYXJAZ21haWwuY29tIiwiaWF0IjoxNzIyMTA2MzE3fQ.HWwenCVT3w95loZyw_ZeMBvh-gmb5yOj9pzbiXt8lMU",
        },
      }
    );
    // console.log(response.data);
    return response.data;
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
        // console.log(state.users);
      });
  },
});

export default fetchUser.reducer;

