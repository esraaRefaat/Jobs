import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userDetailsSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;

