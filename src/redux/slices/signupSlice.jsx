import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signupAction = createAsyncThunk("users/UserInfo",
    async (data) => {
        console.log('datafffffff',data)
        const res =await axios.post("https://jobboardbackend-u9zm.onrender.com/api/v1/auth/signup",{
                name: "hady",
                email: data.email,
                password: data.password, 
                rePassword: data.confirmPassword,
                role:data.userRole
        })
        console.log('res', res.data)
        return res.data
    }
)

const userInfo = createSlice(
    {
        name: "Info",
        initialState: {
            info: []
        },
        extraReducers: (builder) => {
            builder.addCase(
                signupAction.fulfilled, (state, action) => {
                    state.info = action.payload
                }
            )
        }
    }
)
export default userInfo.reducer;