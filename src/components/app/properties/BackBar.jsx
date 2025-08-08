import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router";
import { backArrow } from "../../../assets/export";

export default function BackBar() {
    const navigate = useNavigate();
  return (
    <div className="flex items-center w-full h-[48px] bg-white rounded-[10px] border border-[#E4E4E4] px-4">
      {/* Left: Back arrow and breadcrumb */}
      <div  className="cursor-pointer flex items-center gap-2 min-w-[320px]">
        <img onClick={() => navigate(-1)} src={backArrow} alt="" className="text-[#181818] w-[28px] h-[16px]" />
        <span className="text-[#8C8C8C] text-[14px] font-[400]">Dashboard</span>
        <span className="mx-1 text-[#8C8C8C]">/</span>
        <span className="text-[#8C8C8C] text-[14px] font-[500]">Users Details</span>
        <span className="mx-1 text-[#8C8C8C]">/</span>
        <span className="text-[#181818] text-[14px] font-[500]">Properties</span>
      </div>
      {/* Dashed divider */}
      
    </div>
  );
}