import React, { useState } from "react";
import { useNavigate } from "react-router";
import BlockDeletedModal from "./BlockDeletedModal";

const tabs = ["Landlords", "Tenants", "Properties"];

const blockedUsers = [
  {
    name: "Justin Timberlake",
    avatar: "https://ui-avatars.com/api/?name=Justin+Timberlake",
    blockedDate: "11-01-2025",
    reason: "Donec laoreet rhoncus venenatis sit bibendum...",
  },
  {
    name: "Justin Timberlake",
    avatar: "https://ui-avatars.com/api/?name=Justin+Timberlake",
    blockedDate: "11-01-2025",
    reason: "Donec laoreet rhoncus venenatis sit bibendum...",
  },
];

export default function BlockList() {
  const [activeTab, setActiveTab] = useState("Landlords");
const navigate = useNavigate(); 
const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  return (
    <div className="overflow-hidden">
      {/* Tabs */}
      <div className="flex gap-4 mb-2 p-1 w-[40%] bg-[#F6F6F6] rounded-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-10 py-2 rounded-full text-[14px] font-[500] w-full   transition-all ${
              activeTab === tab
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
      {blockedUsers.map((user, idx) => (
        <div
          key={idx}
          className="grid grid-cols-6 items-center  px-2 text-sm border-b last:border-b-0"
        >
          <div className="flex items-center gap-2">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="truncate max-w-[120px]">{user.name}</span>
          </div>
          <div>{user.blockedDate}</div>
          <div className="truncate col-span-2 bg-[#F6F6F6] border border-[#E6E6E6] px-2 py-4">{user.reason}</div>
          <div className="flex gap-3 pl-10">
            <button onClick={() => setDeleteModalIsOpen(!deleteModalIsOpen)} className="text-[#F04438] font-medium text-xs hover:underline">Unblock</button>
            <button onClick={() =>navigate(`/landlords/1`)} className="text-[#1569BF] font-medium text-xs hover:underline">View Details</button>
          </div>
        </div>
      ))}
    <BlockDeletedModal isOpen={deleteModalIsOpen} onClose={() => setDeleteModalIsOpen(!deleteModalIsOpen)} onUnblock={() => setDeleteModalIsOpen(!deleteModalIsOpen)} />
    </div>
   
  );
}
