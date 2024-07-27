import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginWithFacebook from "./components/LoginWithFacebook/LoginWithFacebook";
import { Provider } from "react-redux";
import store from "./redux/store";
import Profile from "./pages/profile";

function App() {
  return (
    <>
      <Provider store={store}>
        <Profile></Profile>
        <LoginWithFacebook />
      </Provider>
    </>
  );
}

export default App;

