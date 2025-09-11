import React from "react";
import { useNavigate } from "react-router";
import { dateFormate } from "../../../lib/helpers";
import Pagination from "../../global/Pagination";

const landlords = [
  {
    name: "Justin Timberlake",
    avatar: "https://ui-avatars.com/api/?name=Justin+Timberlake",
    onboardDate: "01-01-2025",
    totalProperties: 54,
    subscription: "Monthly",
    price: "$49.99",
    status: "Active",
  },
  {
    name: "Justin Timberlake",
    avatar: "https://ui-avatars.com/api/?name=Justin+Timberlake",
    onboardDate: "01-01-2025",
    totalProperties: 54,
    subscription: "Monthly",
    price: "$49.99",
    status: "Inactive",
  },
  {
    name: "Ariana Grande",
    avatar: "https://ui-avatars.com/api/?name=Ariana+Grande",
    onboardDate: "02-15-2025",
    totalProperties: 32,
    subscription: "Annual",
    price: "$199.99",
    status: "Active",
  },
  {
    name: "Ed Sheeran",
    avatar: "https://ui-avatars.com/api/?name=Ed+Sheeran",
    onboardDate: "03-10-2025",
    totalProperties: 40,
    subscription: "Monthly",
    price: "$29.99",
    status: "Inactive",
  },
];

const badgeClass = (status) => {
  if (status === "Active") return "bg-green-100 text-green-700";
  if (status === "Inactive") return "bg-red-100 text-red-600";
  return "bg-gray-200 text-gray-700";
};

export default function LandLordList({data,pagination,setPage}) {
  const navigate = useNavigate();

  return (
    <div className="">
      {/* Header */}
      <div className="grid grid-cols-7 font-[400] bg-gray-50 py-4 px-2 rounded-[10px] text-[14px] text-gray-700">
        <div className="pl-2">Landlord Name</div>
        <div>Onboard Date</div>
        <div>Total Properties</div>
        <div>Subscription</div>
        <div>Subscription Price</div>
        <div>Status</div>
        <div></div>
      </div>
      {/* Rows */}
      {data.map((landlord, idx) => (
        <div
          key={idx}
          className="grid grid-cols-7 items-center py-4 px-2 text-sm border-b"
        >
          <div className="flex items-center gap-2 pl-2">
            <img
              src={landlord.profilePicture}
              alt={landlord.name}
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="truncate max-w-[120px]">{landlord.name}</span>
          </div>
          <div>{dateFormate(landlord.createdAt)}</div>
          <div>{landlord.propertyUsed||"--"}</div>
          <div>Monthly</div>
          <div>${landlord.currentSubPrice||"--"}</div>
          <div>
            <span
              className={`rounded-full px-4 py-1 font-semibold text-xs ${badgeClass(
                landlord.status
              )}`}
            >
              {landlord.status}
            </span>
          </div>
          <div onClick={() => navigate(`/landlords/${landlord._id}`,{state:{landlord}}) } className="text-[#1569BF] cursor-pointer underline font-medium text-xs">
            
              View Details
            
          </div>
        </div>
      ))}
      <div className="flex justify-end my-4">
                  <Pagination pagnition={pagination} setPageNo={setPage}/>
                </div>
    </div>
  );
}