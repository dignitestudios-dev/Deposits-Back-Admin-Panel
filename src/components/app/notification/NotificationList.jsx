import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

const initialNotifications = [
  {
    title: "Latest Offer",
    description: "Adipiscing sem nunc a nunc mi. Nibh mattis quis massa aenean nisl potenti.",
    type: "Landlord",
  },
  {
    title: "Update Subscription",
    description: "Adipiscing sem nunc a nunc mi. Nibh mattis quis massa aenean nisl potenti.",
    type: "Tenant",
  },
  {
    title: "New Feature",
    description: "Adipiscing sem nunc a nunc mi. Nibh mattis quis massa aenean nisl potenti.",
    type: "Both",
  },
];

export default function NotificationList({deleteModalIsOpen, setDeleteModalIsOpen}) {
 

  

  return (
    <div className=" overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-5  font-semibold bg-gray-50  p-4 rounded-xl text-xs text-gray-700">
        <div>Title</div>
        <div className="col-span-2">Description</div>
        <div className="pl-20">Type</div>
        <div className="text-end">Action</div>
      </div>
      {/* Rows */}
      {initialNotifications.map((item, idx) => (
        <div
          key={idx}
          className="grid grid-cols-5 items-center  px-4 text-sm border-b "
        >
          <div className="truncate max-w-[120px]">{item.title.length > 15 ? item.title.slice(0, 12) + "..." : item.title}</div>
          <div className="truncate col-span-2 bg-[#F6F6F6] border border-[#E6E6E6]  px-3 py-4">{item.description}</div>
          <div className="pl-20">{item.type}</div>
          <div className="text-end">
            <button
              onClick={() => setDeleteModalIsOpen(!deleteModalIsOpen)}
              className="text-red-500 hover:bg-red-100 rounded-full  transition justify-end"
              title="Delete Notification"
            >
              <FiTrash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}