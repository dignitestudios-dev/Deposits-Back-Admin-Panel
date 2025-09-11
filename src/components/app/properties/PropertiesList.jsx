import React from "react";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router";
import { dateFormate } from "../../../lib/helpers";
import Pagination from "../../global/Pagination";

const badgeClass = (status) => {
  if (status === "Paid") return "bg-green-100 text-green-700";
  if (status === "Pending") return "bg-yellow-100 text-yellow-700";
  if (status === "Unpaid") return "bg-red-100 text-red-700";
  return "bg-gray-200 text-gray-700";
};

export default function PropertiesList({properties,pagination,setPage}) {
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
    {properties.map((property, idx) => (
      <div
        key={idx}
        onClick={() => navigate(`/properties/${property._id}`)}
        className="cursor-pointer grid grid-cols-8 items-center py-4 px-2 text-[14px] font-[400] border-b"
      >
        <div className="pl-2 flex items-center gap-1 text-[#0151DA] underline">
          <FiEdit size={16} />
          <span>{property.uniquePropertyCode}</span>
        </div>
        <div className="truncate max-w-[100px]">{property.name}</div>
        <div>{property.leaseStartDate==="null" ? "--" : dateFormate(property.leaseStartDate) }</div>
        <div>{property.leaseEndDate==="null" ? "--" : dateFormate(property.leaseEndDate) }</div>
        <div>${property.rent}</div>
        <div className="flex items-center gap-2">
          <img
            src={property.landlord.profilePicture}
            alt={property.landlord.name}
            className="w-7 h-7 rounded-full object-cover"
          />
          <span className="truncate max-w-[100px]">{property.landlord.name || property.tenant.name}</span>
        </div>
        <div>
          <span className={`rounded-full px-4 py-1 font-semibold text-xs ${badgeClass(property.paymentStatus)}`}>
            {property.paymentStatus}
          </span>
        </div>
        <div>{property.status}</div>
      </div>
    ))}
    <div className="flex justify-end">
      <Pagination pagnition={pagination} setPageNo={setPage}/>
    </div>
  </div>
) ;
};

