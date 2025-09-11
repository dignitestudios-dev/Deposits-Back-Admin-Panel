import React from "react";
import { useNavigate } from "react-router";
import Pagination from "../../global/Pagination";


const badgeClass = (status) => {
  if (status === "active") return "bg-green-100 text-green-700";
  if (status === "inactive") return "bg-red-100 text-red-600";
  if (status === "cancelled") return "bg-yellow-100 text-yellow-600";
  return "bg-gray-200 text-gray-700";
};

export default function SubscriptionList({subscriptions,pagination,setPage}) {
  
    const navigate = useNavigate();
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-7 font-[400] bg-gray-50 py-4 px-2 rounded-[10px] text-[14px] text-[#565656]">
        <div>User Name</div>
        <div>User Type</div>
        <div>Plan</div>
        <div>Subscription</div>
        <div>Subscription Price</div>
        <div>Renew date</div>
        <div></div>
      </div>
      {/* Rows */}
      {subscriptions.map((subscription, idx) => (
        <div
          key={idx}
          className="grid grid-cols-7 items-center py-4 px-2 text-sm border-b last:border-b-0"
        >
          <div className="flex items-center gap-2">
            <img
              src={subscription?.user?.profilePicture}
              alt={subscription?.user?.name}
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="truncate max-w-[120px]">{subscription?.user?.name}</span>
          </div>
          <div>{subscription?.user?.role}</div>
          <div className="truncate max-w-[110px]">{subscription?.sku}</div>
          <div>Monthly</div>
          <div>${subscription?.price}</div>
          <div>
            <span
              className={`rounded-full px-4 py-1 font-semibold text-xs capitalize ${badgeClass(
                subscription?.status
              )}`}
            >
              {subscription?.status}
            </span>
          </div>
          <div>
            <button onClick={() => navigate(subscription?.user?.role === "tenant" ? `/tenants/${subscription?.user?._id}` : `/landlords/${subscription?.user?._id}`)} className="text-[#1569BF] underline font-medium text-xs">
              View Details
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-end my-4">
        <Pagination pagnition={pagination} setPageNo={setPage}/>
        </div>
    </div>
  );
}
