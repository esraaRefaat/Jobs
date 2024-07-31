import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userDetailsSlice";
import authReducer from './slices/signUpSlice'

const store = configureStore({
  reducer: {
    users: userReducer,
    auth: authReducer,
  },
});

export default store;

