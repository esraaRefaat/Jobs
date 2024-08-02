import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userDetailsSlice";
import authReducer from './slices/signupSlice.jsx'
import searchReducer from "./slices/searchSlice.jsx";
import loginReducer from "./slices/loginSlice.jsx";
import forgetPasswordReducer from "./slices/sendemailSlice.jsx";
import PasswordReducer from "./slices/setPassword.jsx";
import tokenReducer from "./slices/tokenSlice.jsx";

const store = configureStore({
  reducer: {
    users: userReducer,
    auth: authReducer,
    search: searchReducer,
    authlogin: loginReducer,
    authForgetPasswerd: forgetPasswordReducer,
    authPasswerd: PasswordReducer,
    Token: tokenReducer

  },
});

export default store;

