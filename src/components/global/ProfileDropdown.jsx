import React from "react";
import useApp, { AppContext } from "../../context/AppContext";
import { NavLink } from "react-router";

export default function ProfileDropdown({isOpen,closeModal}) {
  const { logOutModal,setLogOutModal } = useApp(AppContext);
  return (
    <div className="absolute top-12 right-6 w-[150px] h-auto bg-[#fff] border-[1px] border-[#E3DBDB] rounded-[8px]">
      
      <div className="flex flex-col justify-start items-start  p-3">
        <button onClick={()=>setLogOutModal(!logOutModal)} className="text-[#FF4040] mt-2 text-[14px] font-[500]">
          Logout
        </button>
      </div>
    </div>
  );
}
