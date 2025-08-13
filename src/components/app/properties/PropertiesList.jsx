import React from "react";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router";
const data = [
  {
    code: "258496",
    propertyName: "Property Title",
    leaseStart: "01-01-2025",
    leaseEnd: "31-12-2025",
    rent: "$1200",
    owner: { name: "Justin Timberlake", avatar: "https://ui-avatars.com/api/?name=Justin+Timberlake" },
    rentStatus: "Pending",
    status: "Occupied",
    link: "#"
  },
  {
    code: "258496",
    propertyName: "Property Title",
    leaseStart: "01-01-2025",
    leaseEnd: "31-12-2025",
    rent: "$1200",
    owner: { name: "Justin Timberlake", avatar: "https://ui-avatars.com/api/?name=Justin+Timberlake" },
    rentStatus: "Paid",
    status: "Occupied",
    link: "#"
  }
];

const badgeClass = (status) => {
  if (status === "Paid") return "bg-green-100 text-green-700";
  if (status === "Pending") return "bg-yellow-100 text-yellow-700";
  return "bg-gray-200 text-gray-700";
};

export default function PropertiesList() {
  const navigate = useNavigate();
  return (
    <div className="  overflow-hidden">
    {/* Header */}
    <div className="grid grid-cols-8 font-[400] bg-[#F6F6F6] py-4 px-2 rounded-[16px] text-[14px] text-[#565656]">
      <div className="pl-2">Unique Code</div>
      <div>Property Name</div>
      <div>Lease Start Date</div>
      <div>Lease End Date</div>
      <div>Rent</div>
      <div>Owner</div>
      <div>Rent Status</div>
      <div>Status</div>
    </div>
    {/* Rows */}
    {data.map((row, idx) => (
      <div
        key={idx}
        onClick={() => navigate(`/properties/1`)}
        className="cursor-pointer grid grid-cols-8 items-center py-4 px-2 text-[14px] font-[400] border-b"
      >
        <div className="pl-2 flex items-center gap-1 text-[#0151DA] underline">
          <FiEdit size={16} />
          <span>{row.code}</span>
        </div>
        <div className="underline">{row.propertyName}</div>
        <div>{row.leaseStart}</div>
        <div>{row.leaseEnd}</div>
        <div>{row.rent}</div>
        <div className="flex items-center gap-2">
          <img
            src={row.owner.avatar}
            alt={row.owner.name}
            className="w-7 h-7 rounded-full object-cover"
          />
          <span className="truncate max-w-[100px]">{row.owner.name}</span>
        </div>
        <div>
          <span className={`rounded-full px-4 py-1 font-semibold text-xs ${badgeClass(row.rentStatus)}`}>
            {row.rentStatus}
          </span>
        </div>
        <div>{row.status}</div>
      </div>
    ))}
  </div>
) ;
};

