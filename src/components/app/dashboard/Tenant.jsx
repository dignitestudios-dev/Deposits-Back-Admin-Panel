import { useState } from "react";
import FilterToolBar from "./FilterToolBar";

const tenants = [
    {
      name: "Justin Timberlake",
      profile: "https://randomuser.me/api/portraits/men/1.jpg",
      onboardDate: "12/06/2020",
      properties: "06",
      plan: "Basic Plan",
      price: "&55",
      appRevenue: "$1200",
      status: "Active",
      detailsLink: "#",
      priceDot: false,
    },
    {
      name: "Justin Timberlake",
      profile: "https://randomuser.me/api/portraits/men/1.jpg",
      onboardDate: "12/06/2020",
      properties: "06",
      plan: "Basic Plan",
      price: "&55",
      appRevenue: "$1200",
      status: "Active",
      detailsLink: "#",
      priceDot: true,
    },
    {
      name: "Justin Timberlake",
      profile: "https://randomuser.me/api/portraits/men/1.jpg",
      onboardDate: "12/06/2020",
      properties: "06",
      plan: "Basic Plan",
      price: "&55",
      appRevenue: "$1200",
      status: "Active",
      detailsLink: "#",
      priceDot: false,
    },
    {
      name: "Justin Timberlake",
      profile: "https://randomuser.me/api/portraits/men/1.jpg",
      onboardDate: "12/06/2020",
      properties: "06",
      plan: "Basic Plan",
      price: "&55",
      appRevenue: "$1200",
      status: "Active",
      detailsLink: "#",
      priceDot: true,
    },
  ];
import { useNavigate } from "react-router";
export default function Tenant() {
      const navigate = useNavigate();  
    
    return (
        <div >
      <div className=" rounded-[16px] overflow-x-auto p-0 mt-6">
        {/* Header */}
        <div className="grid grid-cols-8 text-[#565656] bg-[#F6F6F6] font-semibold text-[13px] rounded-[16px] py-5 px-4">
          <div className="text-left">Tenant Name</div>
          <div className="text-left">Onboard Date</div>
          <div className="text-left">Registered Properties</div>
          <div className="text-left">Subscription Plan</div>
          <div className="text-left">Price</div>
          <div className="text-left">App Revenue</div>
          <div className="text-left">Status</div>
          <div className="text-left"></div>
        </div>
        {/* Rows */}
        {tenants.map((tenant, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-8 items-center text-[#181818] text-[15px] px-4 py-4 border-b last:border-0`}
          >
            {/* Landlord Name */}
            <div className="flex items-center gap-2 min-w-[150px]">
              <img
                src={tenant.profile}
                alt={tenant.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="truncate max-w-[80px]" >
                {tenant.name}
              </span>
            </div>
            <div>{tenant.onboardDate}</div>
            <div>{tenant.properties}</div>
            <div>{tenant.plan}</div>
            <div>{tenant.price}</div>
            <div>{tenant.appRevenue}</div>
            <div>
              <span className="bg-[#E8FFF3] text-[#4CD964] px-4 py-1 rounded-full text-[13px] font-medium">
                {tenant.status}
              </span>
            </div>
            <div onClick={() => navigate("/tenants/1")} className=" cursor-pointer text-[#1569BF] font-medium text-[13px] underline">
              
                View Details
              
            </div>
          </div>
        ))}
      </div>
      </div>
    );
  }