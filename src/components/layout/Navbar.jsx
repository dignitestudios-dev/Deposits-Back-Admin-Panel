import { FaRegEye } from "react-icons/fa";
import { logo, notification } from "../../assets/export";
import { IoIosArrowDown } from "react-icons/io";
import ProfileDropdown from "../global/ProfileDropdown";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";




const Navbar = () => {
  const [isProfileOpen, setisProfileOpen] = useState(false);
  const {user} = useContext(AppContext)
  const getInitials = (name) => {
    if (!name) return "";
    const names = name.trim().split(" ");
    return names
      .map((n) => n[0].toUpperCase())
      .slice(0, 2)
      .join("");
  };


  return (
    <div className="py-2">
    <div className="w-full h-full px-4 flex justify-end items-center gap-3 relative">
     <div className="bg-[#F6F6F6] border-[1px] border-[#E3DBDB] rounded-[8px] w-[40px] h-[40px] flex items-center justify-center relative">

      <img src={notification} alt="" className="w-[20px] h-[20px]"/>
      <span className="absolute top-[-5px] right-[-5px] w-4 h-4 bg-red-500 rounded-full text-[#fff] text-[10px] font-medium flex items-center justify-center">2</span>
     </div>

      <span className="w-[162px] h-[40px] rounded-[8px] bg-[#F6F6F6] border-[1px] border-[#E3DBDB] flex items-center justify-center  ">
      <div className=" flex items-center justify-center gap-2">
      <span className="w-[30px] h-[30px] rounded-[20px] text-[14px] font-medium bg-gradient-to-t from-[#003897] to-[#0151DA] flex items-center justify-center text-white">{getInitials("Maya Carter")}</span>
       <p className="text-[14px] font-[400]">Maya Carter</p>
        <button onClick={()=>setisProfileOpen(!isProfileOpen)} className="text-gray-200 text-md ">
          <IoIosArrowDown  className=" text-black" />
        </button>
       </div>
      </span>
    </div>
    {isProfileOpen && (
      <ProfileDropdown isOpen={isProfileOpen} closeModal={()=>setisProfileOpen(!isProfileOpen)} />
    )}
    </div>
  );
};

export default Navbar;
