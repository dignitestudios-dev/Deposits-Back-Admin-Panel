import { useState } from "react";
export default function DashboardBar({setFilter}) {
    const [activeButton, setActiveButton] = useState("7d"); 
    const buttons = ["7d", "30d", "1y", "All"];
    setFilter(activeButton)
    return (
        <div className=" w-full h-[60px] flex items-center justify-between  px-4 border-[1px] rounded-[8px] border-[#E3DBDB]">
            <h1 className="text-[16px] font-medium leading-[20.4px] text-[#181818]">DashboardBar</h1>
            <div className="flex items-center justify-center gap-2">
  {buttons.map((label) => (
    <button
      key={label}
      onClick={() => setActiveButton(label)}
      className={`text-[14px] font-[400] leading-[20.4px]  bg-[#FBFBFB] border border-[#E3DBDB] rounded-[8px] px-3 py-2 ${
        activeButton === label ? "bg-[#FFFFFF] text-[#0151DA] border-[#0151DA] border-[1px]" : "text-[#181818]"
      }`}
    >
      {label}
    </button>

  ))}
  <button className="text-[14px] font-[400] leading-[20.4px] text-[#ffffff] bg-black border border-[#E3DBDB] rounded-[24px] px-3 py-2">Download Report</button>
</div>
        </div>
    );
}