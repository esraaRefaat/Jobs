import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
         {/* <NavBar></NavBar> */}
         <h1>Nav Bar</h1>
         <Outlet></Outlet>   
         
        </>
    );
}

export default Main;