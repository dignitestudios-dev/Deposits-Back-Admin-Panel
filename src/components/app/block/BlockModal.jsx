import React, { useState } from "react";
import Modal from "react-modal";
import { FiX } from "react-icons/fi";

Modal.setAppElement("#root"); // make sure your app root id is 'root'

export default function BlockModal({ isOpen, onClose , block , user}) {
 
  const [desc, setDesc] = useState("");
  const [notification, setNotification] = useState("");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      className="bg-white rounded-2xl shadow-xl w-full max-w-[520px] p-6 outline-none relative"
    >
      {/* Close Button */}
      <button
        onClick={() => onClose(!isOpen)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
      >
        <FiX />
      </button>
<div className="flex items-center gap-3 py-4">
  <img src={user?.profilePicture|| user?.user?.profilePicture} alt="" className="w-12 h-12 rounded-full object-cover"/>
  <p className="flex flex-col text-[16px] font-[500] text-[#181818]">{user?.name|| user?.user?.name } <span className="text-[14px] font-[400] text-[#565656]">{user?.name ? "Tenant" : user?.user?.name ? "Landlord" : ""}</span></p>
</div>
      {/* Notification */}
      <div className="my-6">
        <label className="block font-semibold text-[14px] mb-1">Block Types</label>
        <select onChange={(e) => setNotification(e.target.value)} className="bg-[#F6F6F6] w-full outline-none rounded-[6px] px-4 py-3 text-[14px] font-[400] text-[#181818]" value={notification}
          >
          
          <option value="Permanent">Permanent</option>
          <option value="Temporary">Temporary</option>
          </select>
      </div>

      {/* Send To Tabs */}
      
      {/* Description */}
      <div className="my-6">
        <label className="block font-semibold text-[14px] mb-1">Description</label>
        <textarea
          className="w-full bg-[#F6F6F6] rounded-[8px] px-4 py-3 text-[15px] font-normal outline-none resize-none min-h-[70px] max-h-[120px]"
          placeholder="Description here"
          maxLength={1000}
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
        <div className="text-right text-[12px] text-[#181818] font-[400]">{desc.length}/1000</div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 mt-4">
        <button
          className="px-6 py-2 rounded-full bg-white border border-[#E6E6E6] text-[#181818] font-medium"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="px-8 py-2 rounded-full bg-[red] text-white font-medium"
          onClick={() => block(desc, setDesc)}
        >
          Block
        </button>
        
      </div>
    </Modal>
  );
}