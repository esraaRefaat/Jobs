import { createBrowserRouter } from "react-router-dom";

import Main from "../pages/Main/main.jsx";
import Home from "../pages/Home/home.jsx";
import Error from "../pages/Error/error.jsx";
import Profile from "../pages/profile.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
