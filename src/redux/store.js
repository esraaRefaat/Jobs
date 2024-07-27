import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userDetailsSlice";
import searchReducer from "./slices/searchSlice.jsx";


const store = configureStore({
  reducer: {
    users: userReducer,
    search:searchReducer,
  },
});

export default store;

