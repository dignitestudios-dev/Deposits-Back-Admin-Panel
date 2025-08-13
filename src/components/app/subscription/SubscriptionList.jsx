import React from "react";
import { useNavigate } from "react-router";

const subscriptions = [
  {
    name: "Justin Timberlake",
    avatar: "https://ui-avatars.com/api/?name=Justin+Timberlake",
    userType: "Landlord",
    plan: "Premium Subscription",
    subscription: "Monthly",
    price: "$49.99",
    renewDate: "10-18-2025",
  },
  {
    name: "Beyoncé",
    avatar: "https://ui-avatars.com/api/?name=Beyonce",
    userType: "Tenant",
    plan: "Standard Subscription",
    subscription: "Monthly",
    price: "$29.99",
    renewDate: "11-01-2025",
  },
  {
    name: "Ed Sheeran",
    avatar: "https://ui-avatars.com/api/?name=Ed+Sheeran",
    userType: "Landlord",
    plan: "Basic Subscription",
    subscription: "Yearly",
    price: "$89.99",
    renewDate: "12-15-2025",
  },
  {
    name: "Taylor Swift",
    avatar: "https://ui-avatars.com/api/?name=Taylor+Swift",
    userType: "Tenant",
    plan: "Premium Subscription",
    subscription: "Yearly",
    price: "$499.99",
    renewDate: "01-20-2026",
  },
  {
    name: "Drake",
    avatar: "https://ui-avatars.com/api/?name=Drake",
    userType: "Landlord",
    plan: "Standard Subscription",
    subscription: "Monthly",
    price: "$39.99",
    renewDate: "02-10-2026",
  },
  {
    name: "Ariana Grande",
    avatar: "https://ui-avatars.com/api/?name=Ariana+Grande",
    userType: "Tenant",
    plan: "Basic Subscription",
    subscription: "Monthly",
    price: "$19.99",
    renewDate: "03-05-2026",
  },
];

export default function SubscriptionList() {
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
      {subscriptions.map((row, idx) => (
        <div
          key={idx}
          className="grid grid-cols-7 items-center py-4 px-2 text-sm border-b last:border-b-0"
        >
          <div className="flex items-center gap-2">
            <img
              src={row.avatar}
              alt={row.name}
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="truncate max-w-[120px]">{row.name}</span>
          </div>
          <div>{row.userType}</div>
          <div>{row.plan}</div>
          <div>{row.subscription}</div>
          <div>{row.price}</div>
          <div>{row.renewDate}</div>
          <div>
            <button onClick={() => navigate(`/landlords/1`)} className="text-[#1569BF] underline font-medium text-xs">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
