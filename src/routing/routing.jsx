import { createBrowserRouter } from "react-router-dom";

import Main from "../pages/Main/main.jsx";
import Home from "../pages/Home/home.jsx";
import Error from "../pages/Error/error.jsx";
import Profile from "../pages/profile.jsx";
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Search from "../pages/search/search.jsx";
import ForgetPassword from '../pages/ForgetPassword'
import NewPassword from '../pages/NewPassword'
import JobInfo from '../pages/JobInfo/jobInfoPage.jsx'




export const router = createBrowserRouter([
  {
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
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "jobinfo/:id",
        element: <JobInfo />,
      }
    ],
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "forgetpassword",
    element: <ForgetPassword />,
  },
  {
    path: "newpassword",
    element: <NewPassword />,
  },
]);
