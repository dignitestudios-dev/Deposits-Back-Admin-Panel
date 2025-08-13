import React from "react";
import { useNavigate } from "react-router";

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

export default function LandLordList() {
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
      {landlords.map((row, idx) => (
        <div
          key={idx}
          className="grid grid-cols-7 items-center py-4 px-2 text-sm border-b"
        >
          <div className="flex items-center gap-2 pl-2">
            <img
              src={row.avatar}
              alt={row.name}
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="truncate max-w-[120px]">{row.name}</span>
          </div>
          <div>{row.onboardDate}</div>
          <div>{row.totalProperties}</div>
          <div>{row.subscription}</div>
          <div>{row.price}</div>
          <div>
            <span
              className={`rounded-full px-4 py-1 font-semibold text-xs ${badgeClass(
                row.status
              )}`}
            >
              {row.status}
            </span>
          </div>
          <div onClick={() => navigate(`/landlords/1`) } className="text-[#1569BF] cursor-pointer underline font-medium text-xs">
            
              View Details
            
          </div>
        </div>
      ))}
    </div>
  );
}