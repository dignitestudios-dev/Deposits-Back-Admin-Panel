import React, { useState } from "react";
import { useNavigate } from "react-router";
import BlockDeletedModal from "./BlockDeletedModal";
import { dateFormate } from "../../../lib/helpers";
import Pagination from "../../global/Pagination";





export default function BlockList({blockUser,pagination,setPage,setType , deleteModalIsOpen , setDeleteModalIsOpen , unblock}) {
 
const [activeType, setActiveType] = useState("landlord");
setType(activeType)
const navigate = useNavigate(); 
const [userInfo, setUserInfo] = useState(null);
console.log(blockUser,"blockUser")
  return (
    <div className="overflow-hidden">
      {/* Tabs */}
      <div className="flex gap-4 mb-2 p-1 w-[40%] bg-[#F6F6F6] rounded-full">
        {["landlord","tenant","property"].map((tab ,index) => (
          <button
            key={index}
           
            onClick={() => setActiveType(tab)}
            className={`px-10 py-2 rounded-full text-[14px] font-[500] w-full   transition-all ${
              activeType === tab
                ? "bg-black text-white"
                : " text-[#181818]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Header */}
      <div className="grid grid-cols-6 font-semibold bg-gray-50 py-4 px-2 rounded-xl text-xs text-gray-700">
        <div>User Name</div>
        <div>Blocked Date</div>
        <div className="col-span-2">Reason</div>
        <div className="pl-10">Action</div>
      </div>
      {/* Rows */}
      {blockUser.map((block, idx) => (
        <div
          key={idx}
          className="grid grid-cols-6 items-center  px-2 text-sm border-b last:border-b-0"
        >
          <div className="flex items-center gap-2">
            <img
              src={block?.user?.profilePicture}
              alt={block?.user?.name}
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="truncate max-w-[120px]">{block?.user?.name}</span>
          </div>
          <div>{dateFormate(block.createdAt)}</div>
          <div className="truncate col-span-2 bg-[#F6F6F6] border border-[#E6E6E6] px-2 py-4">{block.reason}</div>
          <div className="flex gap-3 pl-10">
            <button onClick={() => {setDeleteModalIsOpen(!deleteModalIsOpen); setUserInfo(block);}} className="text-[#F04438] font-medium text-xs hover:underline">Unblock</button>
            <button onClick={() =>navigate(`/${activeType}s/${block.user._id}`)} className="text-[#1569BF] font-medium text-xs hover:underline">View Details</button>
          </div>
        </div>
      ))}
      <div className="flex justify-end my-4">

      <Pagination pagnition={pagination} setPageNo={setPage}/>
      </div>
    <BlockDeletedModal isOpen={deleteModalIsOpen} onClose={() => setDeleteModalIsOpen(!deleteModalIsOpen)} userInfo={userInfo} unblock={unblock}  />
    </div>
   
  );
}
