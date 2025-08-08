import { FiZap } from "react-icons/fi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function Reviews() {
  return (
    <div className="bg-[#D6F4C7] rounded-[10px] p-5 w-full flex flex-col items-center gap-6">

      <div className="flex items-center gap-2 w-full">
        <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border-[#2A4D14] border-[1px]">

        <FiZap className="text-[#2A4D14]" />
        </div>

        <span className="text-[#2A4D14] font-[400] text-[16px]">Rating and reviews</span>
      </div>
    
      <div className="flex  items-center w-full gap-6 mt-2">
        <span className="text-[54px] font-[600] text-[#2A4D14] leading-none ">4.5</span>
        
        <div className="flex flex-col text-[#2A4D14] text-[22px] gap-1" >
          <div className="flex items-center gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          </div>
        <span className="text-[16px] text-[#2A4D14]">Based on 150 Reviews</span>
        </div>
      </div>
    
      <button className="w-full bg-white text-[#2A4D14] font-[400] rounded-full py-2 mt-2  text-[18px]">
        Read Reviews
      </button>
    </div>
  );
}