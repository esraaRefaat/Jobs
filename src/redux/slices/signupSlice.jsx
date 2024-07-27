import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signupAction=createAsyncThunk("users/getUserInfo",
    async()=>{
       const res= await axios.get("http://localhost:1000/users")
       return res.data
    }
)

const usersSlice=createSlice(
{
    name:"users",
    initialState:{users:[]  
     },
    extraReducers:(builder)=>{
        builder.addCase(
            usersAction.fulfilled,(state,action)=>{
                state.users=action.payload
            }   
        )
    }
}
)
export default usersSlice.reducer;