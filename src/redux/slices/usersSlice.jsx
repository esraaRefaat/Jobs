import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usersAction = createAsyncThunk("users/getAllusers",
    async () => {
        const res = await axios.get("https://jobboardbackend-u9zm.onrender.com/api/v1/jobs")
        return res.data
    }
)

const usersSlice = createSlice(
    {
        name: "getUsers",
        initialState: {
            users: [],
            isLoading: false,
            error: false,
        },
        extraReducers: (builder) => {
            builder
                .addCase(usersAction.pending, (state) => {
                    state.isLoading = true;
                    state.error = false;
                })
                .addCase(usersAction.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.users = action.payload.document;
                })
                .addCase(usersAction.rejected, (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                });
        }
    }
)
export default usersSlice.reducer;