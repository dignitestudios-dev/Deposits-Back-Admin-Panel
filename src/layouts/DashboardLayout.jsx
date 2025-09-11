import { Outlet } from "react-router";
import DummyNavbar from "../components/layout/Navbar";
import DummySidebaar from "../components/layout/Sidebaar";
import { useEffect, useState } from "react";
import NoInternetModal from "../components/global/NoInternet";
import { NoInternetImage } from "../assets/export";
import Sidebaar from "../components/layout/Sidebaar";
import Navbar from "../components/layout/Navbar";
import LogOutModal from "../components/authentication/LogOutModal";

const DashboardLayout = () => {
  const [openNoInternet, setOpenNoInternet] = useState(false);

  useEffect(() => {
    if (!navigator.onLine) {
      // Handle no internet connection
      setOpenNoInternet(true);
    }
  }, []);
  return (
    <div className="w-full h-screen flex flex-col justify-start items-start">
      <div className="w-full flex items-end justify-end ">
        <div className=" w-[calc(100%-15.9rem)]  bg-[#FBFBFB] z-10  border-b-[1px] border-[#E3DBDB] h-14">
          <Navbar />
        </div>
      </div>
      <img src={NoInternetImage} alt="" className="hidden" />
      <div className="w-full h-full flex justify-start items-start  absolute  ">
        <div className="w-64 h-screen bg-[#FBFBFB] border-r-[1px] border-[#E3DBDB]  ">
      
          <Sidebaar />
        
        </div>
        
        <div className="w-[calc(100%-15rem)] h-screen pt-16 px-4 overflow-y-auto bg-[#F3F8FF] ">
          <NoInternetModal isOpen={openNoInternet} />
          <LogOutModal />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
