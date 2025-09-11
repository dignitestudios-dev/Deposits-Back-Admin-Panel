import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { manageusers } from "../../../assets/export";
import { useNavigate } from "react-router";

export default function LandLordRules({ property }) {
  const [activeTab, setActiveTab] = useState("agreements");
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-[12px] p-5 w-full max-w-[420px] my-4 ">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-[40px] h-[40px] rounded-full border-black border-[1px] flex items-center justify-center">
          <img src={manageusers} alt="" className="w-[20px] h-[20px]" />
        </div>
        <span className="font-semibold text-[18px]">Landlord</span>
      </div>
      {/* Avatar & Name */}
      <div className="flex items-center gap-4 mb-4 px-2">
        <img
          src={property.tempLandlord.profilePicture}
          alt="Justin Timberlake"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1 flex items-center gap-2 justify-between">
          <span className="font-semibold text-lg text-gray-900">
            {property.tempLandlord.name}
          </span>
          <button
            onClick={() => navigate(`/landlords/${property.tempLandlord._id}`)}
          >
            <FiArrowUpRight className="text-gray-500" />
          </button>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex gap-2 mb-4 bg-[#F2F2F2] rounded-[10px] p-2">
        <button
          onClick={() => setActiveTab("agreements")}
          className={`  text-[#181818] font-medium px-4 py-2 rounded-lg  ${
            activeTab === "agreements" ? "bg-white px-4 py-2 rounded-lg" : ""
          }`}
        >
          Agreements
        </button>
        <button
          onClick={() => setActiveTab("repairs")}
          className={`text-[#181818] font-medium px-4 py-2 rounded-lg ${
            activeTab === "repairs" ? "bg-white px-4 py-2 rounded-lg" : ""
          }`}
        >
          Repairs
        </button>
        <button
          onClick={() => setActiveTab("rules")}
          className={`text-[#181818] font-medium px-4 py-2 rounded-lg ${
            activeTab === "rules" ? "bg-white px-4 py-2 rounded-lg" : ""
          }`}
        >
          Rules
        </button>
      </div>
      {/* No Documents State */}
      <div className="flex flex-col items-center justify-center mt-8 mb-2 ">
        <div className="w-20 h-20 rounded-full bg-[#F6F8FB] flex items-center justify-center mb-2">
          <span className="text-2xl text-gray-400">🗑️</span>
        </div>
        <span className="text-gray-400 text-[16px] font-medium">
          No Documents
        </span>
      </div>
    </div>
  );
}
