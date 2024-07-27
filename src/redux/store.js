import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userDetailsSlice";
import userInfoReducer from './slices/signUpSlice'

const store = configureStore({
  reducer: {
    users: userReducer,
    Info: userInfoReducer
  },
});

export default store;

