import React from "react";
import { Outlet } from "react-router";
import { login_image } from "../assets/export";

const AuthLayout = () => {
  return (
    <div className="w-full h-full  grid grid-cols-2 overflow-hidden ">
      <div className="flex items-center justify-center">

      <Outlet />
      </div>
      <div className="flex justify-center items-center h-screen">
        <img src={login_image} alt="" className="w-[95%] h-[95%]" />
      </div>
    </div>
  );
};

export default AuthLayout;
