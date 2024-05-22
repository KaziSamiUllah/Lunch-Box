import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar";

const MainLayout = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div 
      className={
        (location.pathname === '/' || location.pathname === '/login')? 'absolute z-10 w-full' : ''
      }
      >
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
