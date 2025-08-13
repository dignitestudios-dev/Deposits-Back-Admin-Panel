import React from "react";
import { useNavigate } from "react-router";

const tenants = [
  {
    name: "Justin Timberlake",
    avatar: "https://ui-avatars.com/api/?name=Justin+Timberlake",
    onboardDate: "01-01-2025",
    propertyCode: "258496",
    propertyLink: "#",
    subscription: "Monthly",
    price: "$49.99",
    status: "Active",
  },
  {
    name: "Ariana Grande",
    avatar: "https://ui-avatars.com/api/?name=Ariana+Grande",
    onboardDate: "02-15-2025",
    propertyCode: "258497",
    propertyLink: "#",
    subscription: "Monthly",
    price: "$39.99",
    status: "Active",
  },
  {
    name: "Ed Sheeran",
    avatar: "https://ui-avatars.com/api/?name=Ed+Sheeran",
    onboardDate: "03-10-2025",
    propertyCode: "258498",
    propertyLink: "#",
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

export default function TenantLists() {
  const navigate = useNavigate();
  return (
    <div className="bg-white  ">
      {/* Header */}
      <div className="grid grid-cols-7 font-[400] bg-gray-50 py-4 px-2 rounded-[10px] text-[14px] text-gray-700">
        <div className="pl-2">Tenant Name</div>
        <div>Onboard Date</div>
        <div>Unique Property Code</div>
        <div>Subscription</div>
        <div>Subscription Price</div>
        <div>Status</div>
        <div></div>
      </div>
      {/* Rows */}
      {tenants.map((row, idx) => (
        <div
          key={idx}
          className={`grid grid-cols-7 items-center py-4 px-2 text-sm border-b overflow-y-auto`}
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
          <div>
            <a
              href={row.propertyLink}
              className="text-blue-700 underline flex items-center gap-1"
            >
              <svg
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block"
              >
                <path
                  d="M12 20v-6m0 0l-2 2m2-2l2 2m-2-2V4"
                  stroke="#1569BF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {row.propertyCode}
            </a>
          </div>
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
          <div onClick={() => navigate(`/tenants/1`)} className="text-[#1569BF] cursor-pointer underline font-medium text-xs">
            
              View Details
          
          </div>
        </div>
      ))}
    </div>
  );
}