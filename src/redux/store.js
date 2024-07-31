import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userDetailsSlice";
import authReducer from './slices/signUpSlice'
import searchReducer from "./slices/searchSlice.jsx";


const store = configureStore({
  reducer: {
    users: userReducer,
    auth: authReducer,
    search:searchReducer,
  },
});

export default store;

