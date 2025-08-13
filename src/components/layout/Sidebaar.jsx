import { NavLink, useLocation } from "react-router";
import { sidebarData } from "../../static/Sidebar";
import { logo, toggle } from "../../assets/export";
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from "react-icons/io";
import { useState } from "react";

const Sidebaar = ({ toggleModal }) => {
  const location = useLocation();
  console.log(location, "location");
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (title) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };
  return (
    <div className="w-full h-full overflow-y-auto py-3 flex flex-col gap-3">
      {/* Logo + Toggle */}
      <div className="flex items-center justify-between p-4">
        <div className="flex justify-center">
          <img src={logo} alt="logo" className="w-[40px]" />
        </div>
        <button onClick={() => toggleModal()} className="w-6 h-6">
          <img src={toggle} alt="" className="w-full h-full text-black" />
        </button>
      </div>

      {/* Sidebar Items */}
      {sidebarData?.map((sidebar) => (
        <div key={sidebar.link} className="w-full px-2">
          {/* Parent Item */}
          <div
            className={`cursor-pointer text-sm w-full h-10 flex items-center gap-5 px-2  justify-between rounded-[8px] font-medium text-[#181818] ${
              location.pathname.includes(sidebar.link) || openDropdown === sidebar.title 
                ? " bg-gradient-to-r from-[#D7D3F1]/30 via-[#E9D1ED]/30 via-[#C5D7F5]/30 to-[#F9B9CF]/30  "
                : ""
            }`}
            onClick={() =>
               toggleDropdown(sidebar.title)
            }
          >
            <NavLink
              to={sidebar.link}
              className="flex items-center gap-3 w-full h-full"
            >
              <img
              src={
                location?.pathname.includes(sidebar.link)
                  ? sidebar?.iconBlue
                  : sidebar?.icon
              }
              alt=""
              className="w-[20px] h-[20px]"
              />
               <span className="text-[14px]">{sidebar.title}</span>
            </NavLink>
            {sidebar.children && (
              <span className="text-lg">{openDropdown === sidebar.title ? <IoIosArrowUp /> :<IoIosArrowDown />}</span>
            )}
          </div>

          {/* Child Items */}
          {sidebar.children && openDropdown === sidebar.title && (
            <div className=" pl-2 mt-2 flex flex-col gap-2">
              {sidebar.children.map((child) => (
                <NavLink
                  to={child.link}
                  key={child.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm border-[#2F7EF7] border-[1px] rounded-[8px] p-2  font-semibold flex items-center gap-2"
                      : "text-sm text-[#181818] flex items-center p-2 gap-2"
                  }
                >
                  <img
              src={
                location?.pathname.includes(child.link)
                  ? child?.iconBlue
                  : child?.icon
              }
              alt=""
              className="w-[15px] h-[15px]"
              />
                   {child.title}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Sidebaar;
