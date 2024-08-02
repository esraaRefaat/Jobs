import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../../components/navBar/navigationBar";

const Main = () => {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Outlet></Outlet>
    </>
  );
};

export default Main;

