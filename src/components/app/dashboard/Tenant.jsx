import { useState } from "react";
import FilterToolBar from "./FilterToolBar";


import { useNavigate } from "react-router";
import { dateFormate } from "../../../lib/helpers";
export default function Tenant({data}) {
      const navigate = useNavigate();  
    console.log(data,"tenant")
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
         {data.map((tenant, idx) => (
                  <div
                    key={idx}
                    className={`grid grid-cols-8 items-center text-[#181818] text-[15px] px-4 py-4 border-b last:border-0`}
                  >
                    {/* Landlord Name */}
                    <div className="flex items-center gap-2 min-w-[150px]">
                      <img
                        src={tenant.profilePicture}
                        alt={tenant.name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="truncate max-w-[80px]" >
                        {tenant.name}
                      </span>
                    </div>
                    <div>{dateFormate(tenant.onboardDate||"--")}</div>
                    <div>{tenant.registeredProperties||"--"}</div>
                    <div className="truncate max-w-[105px]">{tenant.subPlan||"--"}</div>
                    <div>${tenant.price||"--"}</div>
                    <div className="truncate max-w-[105px]">${tenant.totalSpent||"--"}</div>
                    <div>
                    <span
          className={`px-4 py-1 rounded-full text-[13px] font-medium
            ${tenant.subscriptionStatus === "active" ? "bg-[#E8FFF3] text-[#4CD964]" : ""}
            ${tenant.subscriptionStatus === "cancelled" ? "bg-[#FFE8E8] text-[#FF3B30]" : ""}`}
        >
          {tenant.subscriptionStatus||"--"}
        </span>
                    </div>
                    <div  onClick={() => navigate(`/tenants/${tenant._id}`,{state:{tenant}})} className=" cursor-pointer text-[#1569BF] font-medium text-[13px] underline">
                    
                       
                        View Details
                    
                    </div>
                  </div>
                ))}
      </div>
      </div>
    );
  }