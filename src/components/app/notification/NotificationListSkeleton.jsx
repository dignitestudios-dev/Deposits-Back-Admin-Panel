import React from "react";

export default function NotificationListSkeleton() {
  return (
    <div className="overflow-hidden animate-pulse">
      {/* Header */}
      <div className="grid grid-cols-5 font-semibold bg-gray-50 p-4 rounded-xl text-xs text-gray-700">
        <div className="h-3 w-12 bg-gray-300 rounded"></div>
        <div className="h-3 w-24 bg-gray-300 rounded col-span-2"></div>
        <div className="h-3 w-10 bg-gray-300 rounded pl-20"></div>
        <div className="h-3 w-12 bg-gray-300 rounded justify-self-end"></div>
      </div>

      {/* Skeleton Rows */}
      {[...Array(5)].map((_, idx) => (
        <div
          key={idx}
          className="grid grid-cols-5 items-center px-4 text-sm border-b py-3"
        >
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
          <div className="col-span-2 h-8 bg-gray-200 rounded"></div>
          <div className="h-4 w-16 bg-gray-300 rounded pl-20"></div>
          <div className="h-5 w-5 bg-gray-300 rounded-full justify-self-end"></div>
        </div>
      ))}
    </div>
  );
}
