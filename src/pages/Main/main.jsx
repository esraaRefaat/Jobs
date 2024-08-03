import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../../components/navBar/navigationBar";
import Footer from "../footer/footer";

const Main = () => {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;

