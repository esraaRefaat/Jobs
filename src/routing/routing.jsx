import { createBrowserRouter } from "react-router-dom";

import Main from "../pages/Main/main.jsx";
import Home from "../pages/Home/home.jsx";
import Error from "../pages/Error/error.jsx";
import Profile from "../pages/profile.jsx";
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp></SignUp>,
    errorElement: <Error></Error>,
    // children: [
    //   {
    //     index: true,
    //     element: <Home />,
    //   },
    //   {
    //     path: "profile",
    //     element: <Profile />,
    //   },
    // ],
  },
  {
    path: "/Login",
    element:<Login></Login>,
    errorElement: <Error></Error>,
  }
]);
