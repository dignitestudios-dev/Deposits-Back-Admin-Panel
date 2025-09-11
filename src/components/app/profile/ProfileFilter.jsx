import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

export default function ProfileFilter({setStatus}) {
  
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState("pending");
  const tabs = [ "pending", "approved", "rejected"];
  setStatus(activeTab)
  return (
    <div className="flex flex-col space-y-6 bg-white rounded-[10px] p-6 ">
    <div className="flex items-center justify-between ">
      <div>
        <p className="text-[16px] flex items-center gap-2 font-[500] text-[#181818]">
          <span className="h-[32px] w-[12px] bg-gradient-to-t from-[#003897] to-[#0151DA] rounded-[4px]"></span>
          Profile Review
        </p>
      </div>
      {/* <div className="flex items-center gap-2">
      <div className="flex items-center bg-[#F6F6F6] rounded-full px-4 py-2 w-[180px] h-10">
        <FiSearch className="text-[#BDBDBD] mr-2" size={18} />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-[16px] w-full font-[400]"
        />
      </div>
      <div className="relative">
        <button
          className="flex items-center bg-white border border-[#E4E4E4] rounded-full px-6 h-10 text-[16px] font-[300]"
          onClick={() =>
            setOpenDropdown(openDropdown === "date" ? null : "date")
          }
        >
          {date}
          <IoMdArrowDropdown size={20} className="ml-1" />
        </button>
        {openDropdown === "date" && (
          <div className="absolute left-0 mt-2 w-full bg-white border border-[#E4E4E4] rounded-lg shadow-lg z-10">
            {["Newest", "Oldest"].map((option) => (
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
        </div> */}
    </div>
        <div className="flex mb-6 p-1 w-full md:w-1/2 bg-[#F6F6F6] rounded-full">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 rounded-full text-[14px] font-[500] w-full transition-all capitalize ${
                      activeTab === tab ? "bg-black text-white" : "text-[#181818]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
    </div>
  );
}
