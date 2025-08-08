import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

export default function Filter() {
  const [rentStatus, setRentStatus] = useState("Rent Status");
  const [propertyType, setPropertyType] = useState("Property Type");
  const [date, setDate] = useState("Date");
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="flex items-center gap-10 ">
     
      <div>
      <p className="text-[16px] flex items-center gap-2 font-[500] text-[#181818]"><span className="h-[32px] w-[12px] bg-gradient-to-t from-[#003897] to-[#0151DA] rounded-[4px]"></span> Properties</p>
      </div>
   <div className="flex items-center gap-2">
      {/* Search */}
      <div className="flex items-center bg-[#F6F6F6] rounded-full px-4 py-2 w-[180px] h-10">
        <FiSearch className="text-[#BDBDBD] mr-2" size={18} />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-[16px] w-full font-[400]"
        />
      </div>
      {/* Rent Status Dropdown */}
      <div className="relative">
        <button
          className="flex items-center bg-white border border-[#E4E4E4] rounded-full px-4 h-10 text-[16px] font-[300]"
          onClick={() => setOpenDropdown(openDropdown === "rent" ? null : "rent")}
        >
          {rentStatus}
          <IoMdArrowDropdown size={20} className="ml-1" />
        </button>
        {openDropdown === "rent" && (
          <div className="absolute left-0 mt-2 w-full bg-white border border-[#E4E4E4] rounded-lg shadow-lg z-10">
            {["All", "Rented", "Vacant"].map(option => (
              <div
                key={option}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setRentStatus(option);
                  setOpenDropdown(null);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Property Type Dropdown */}
      <div className="relative">
        <button
          className="flex items-center bg-white border border-[#E4E4E4] rounded-full px-6 h-10 text-[16px] font-[300]"
          onClick={() => setOpenDropdown(openDropdown === "type" ? null : "type")}
        >
          {propertyType}
          <IoMdArrowDropdown size={20} className="ml-1" />
        </button>
        {openDropdown === "type" && (
          <div className="absolute left-0 mt-2 w-full bg-white border border-[#E4E4E4] rounded-lg shadow-lg z-10">
            {["All", "Apartment", "House", "Villa"].map(option => (
              <div
                key={option}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setPropertyType(option);
                  setOpenDropdown(null);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Date Dropdown */}
      <div className="relative">
        <button
          className="flex items-center bg-white border border-[#E4E4E4] rounded-full px-6 h-10 text-[16px] font-[300]"
          onClick={() => setOpenDropdown(openDropdown === "date" ? null : "date")}
        >
          {date}
          <IoMdArrowDropdown size={20} className="ml-1" />
        </button>
        {openDropdown === "date" && (
          <div className="absolute left-0 mt-2 w-full bg-white border border-[#E4E4E4] rounded-lg shadow-lg z-10">
            {["Newest", "Oldest"].map(option => (
              <div
                key={option}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setDate(option);
                  setOpenDropdown(null);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      </div>
    </div>
  );
}