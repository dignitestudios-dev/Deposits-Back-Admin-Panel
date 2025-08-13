import React from "react";
import { FiPlus } from "react-icons/fi";

export default function NotificationBar({setModalIsOpen, modalIsOpen}) {
  return (
    <div className="flex items-center justify-between bg-[#Ffff] border border-[#ECECEC] rounded-[10px] px-4 py-3 mb-4">
      <span className="font-semibold text-[15px] text-[#181818]">Push Notification</span>
      <button onClick={() => setModalIsOpen(!modalIsOpen)} className="flex items-center gap-2 bg-[#181818] text-white rounded-full px-5 py-2 font-[500] text-[14px] hover:bg-[#222] transition-all">
        <FiPlus size={16} />
        Notification
      </button>
    </div>
  );
}