import { FiSearch, FiFilter } from "react-icons/fi";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
export default function FilterToolBar() {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState("Monthly");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex items-center justify-between"> 

       
        <p className="text-[16px] flex items-center gap-2 font-[500] text-[#181818]"><span className="h-[32px] w-[12px] bg-gradient-to-t from-[#003897] to-[#0151DA] rounded-[4px]"></span> Revenue Generated</p>
    <div className="flex items-center gap-3 ">
      {/* Search */}
      <div className="flex items-center bg-[#F6F6F6] rounded-full px-4 py-2 w-[250px] h-10">
        <FiSearch className="text-[#BDBDBD] mr-2" size={18} />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-[15px] w-full"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      {/* Dropdown */}
      <div className="relative">
        <button
          className="flex items-center justify-center gap-2 bg-white border border-[#E4E4E4] rounded-full w-[109px] h-10 text-[16px] font-[300] text-[#181818]"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {dropdown}
          <IoMdArrowDropdown size={22} color="#181818"/>
        </button>
        {dropdownOpen && (
          <div className="absolute left-0 mt-2 w-full bg-white border border-[#E4E4E4] rounded-lg shadow-lg z-10">
            {["Monthly", "Weekly", "Yearly"].map(option => (
              <div
                key={option}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${dropdown === option ? "font-bold text-[#003897]" : ""}`}
                onClick={() => {
                  setDropdown(option);
                  setDropdownOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Filter Icon */}
      <button className="bg-white border border-[#E4E4E4] rounded-full w-10 h-10 flex items-center justify-center">
        <VscSettings className="text-[#181818]" size={20} />
      </button>
    </div>
    </div>
 
  );
}