

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signup = createAsyncThunk(
  'auth/signup',
  async ({ name, email, password, rePassword, role }, thunkAPI) => {
    try {
      const response = await axios.put('https://jobboardbackend-u9zm.onrender.com/api/v1/auth/signup', {
        name,
        email,
        password,
        rePassword,
        role
      },
      {
        headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
          }
    }
    );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export default authSlice.reducer;
