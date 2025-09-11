import React from "react";
import { FiUser, FiMail, FiPhone, FiCalendar, FiMapPin } from "react-icons/fi";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

const EsaCard = ({ user }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case "Approved":
        return <FaCheckCircle className="text-green-500" />;
      case "Rejected":
        return <FaTimesCircle className="text-red-500" />;
      default:
        return <FaClock className="text-yellow-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-4 border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
            <FiUser size={24} className="text-gray-500" />
          </div>
          <div>
            <h3 className="font-medium text-lg">{user.name}</h3>
            <p className="text-gray-500 text-sm">ID: {user.id}</p>
          </div>
        </div>
        <div
          className="flex items-center px-3 py-1 rounded-full text-sm font-medium bg-opacity-10"
          style={{
            backgroundColor:
              user.status === "Approved"
                ? "rgba(34, 197, 94, 0.1)"
                : user.status === "Rejected"
                ? "rgba(239, 68, 68, 0.1)"
                : "rgba(234, 179, 8, 0.1)",
          }}
        >
          {getStatusIcon(user.status)}
          <span
            className="ml-2"
            style={{
              color:
                user.status === "Approved"
                  ? "#22C55E"
                  : user.status === "Rejected"
                  ? "#EF4444"
                  : "#EAB308",
            }}
          >
            {user.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="flex items-center">
          <FiMail className="text-gray-400 mr-2" />
          <span className="text-gray-600">{user.email}</span>
        </div>
        <div className="flex items-center">
          <FiPhone className="text-gray-400 mr-2" />
          <span className="text-gray-600">{user.phone}</span>
        </div>
        <div className="flex items-center">
          <FiCalendar className="text-gray-400 mr-2" />
          <span className="text-gray-600">Joined: {user.joinDate}</span>
        </div>
        <div className="flex items-center">
          <FiMapPin className="text-gray-400 mr-2" />
          <span className="text-gray-600">{user.location}</span>
        </div>
      </div>

      <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
          View Details
        </button>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700">
            Approve
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default EsaCard;
