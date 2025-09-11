import React from "react";
import { useNavigate } from "react-router";
import { dateFormate } from "../../../lib/helpers";
import Pagination from "../../global/Pagination";


const badgeClass = (status) => {
  if (status === "Active") return "bg-green-100 text-green-700";
  if (status === "Inactive") return "bg-red-100 text-red-600";
  return "bg-gray-200 text-gray-700";
};

export default function TenantLists({data,pagination,setPage}) {
 
  const navigate = useNavigate();
  return (
    <div className="bg-white  ">
      {/* Header */}
      <div className="grid grid-cols-7 font-[400] bg-gray-50 py-4 px-2 rounded-[10px] text-[14px] text-gray-700">
        <div className="pl-2">Tenant Name</div>
        <div>Onboard Date</div>
       
        <div>Subscription</div>
        <div>Subscription Price</div>
        <div>Status</div>
        <div></div>
      </div>
      {/* Rows */}
      {data.map((tenant, idx) => (
        <div
          key={idx}
          className={`grid grid-cols-7 items-center py-4 px-2 text-sm border-b overflow-y-auto`}
        >
          <div className="flex items-center gap-2 pl-2">
            <img
              src={tenant.profilePicture}
              alt={tenant.name}
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="truncate max-w-[120px]">{tenant.name}</span>
          </div>
          <div>{dateFormate(tenant.createdAt)}</div>
          
          <div className="truncate max-w-[110px]">Monthly</div>
          <div>${tenant.currentSubPrice||"--"}</div>
          <div>
            <span
              className={`rounded-full px-4 py-1 font-semibold text-xs ${badgeClass(
                tenant.status
              )}`}
            >
              {tenant.status}
            </span>
          </div>
          <div onClick={() => navigate(`/tenants/${tenant._id}`)} className="text-[#1569BF] cursor-pointer underline font-medium text-xs">
            
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