import React, { useState } from "react";
import Modal from "react-modal";
import { FiX } from "react-icons/fi";

Modal.setAppElement("#root"); // make sure your app root id is 'root'

export default function CreateNotification({ isOpen, onClose }) {
  const [tab, setTab] = useState("Landlord");
  const [desc, setDesc] = useState("");
  const [notification, setNotification] = useState("Basic Subscription Plan");

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

      {/* Notification */}
      <div className="mb-4">
        <label className="block font-semibold text-[14px] mb-1">Notification</label>
        <input onChange={(e) => setNotification(e.target.value)} className="bg-[#F6F6F6] w-full outline-none rounded-[6px] px-4 py-3 text-[14px] font-[400] text-[#181818]" value={notification}/>
      </div>

      {/* Send To Tabs */}
      <div className="mb-4">
        <label className="block font-semibold text-[14px] mb-1">Send To</label>
        <div className="flex gap-2">
          <button
            className={`flex-1 py-2 rounded-[8px] font-[400] text-[14px] transition ${
              tab === "Landlord"
                ? "bg-gradient-to-t from-[#003897] to-[#0151DA] text-white"
                : "bg-white text-[#181818] border border-[#E6E6E6]"
            }`}
            onClick={() => setTab("Landlord")}
          >
            Landlord
          </button>
          <button
            className={`flex-1 py-2 rounded-[8px] font-[400] text-[14px] transition ${
              tab === "Tenant"
                ? "bg-gradient-to-t from-[#003897] to-[#0151DA] text-white"
                : "bg-white text-[#181818] border border-[#E3DBDB]"
            }`}
            onClick={() => setTab("Tenant")}
          >
            Tenant
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
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
      <div className="flex justify-end gap-2 mt-2">
        <button
          className="px-6 py-2 rounded-full bg-white border border-[#E6E6E6] text-[#181818] font-medium"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="px-8 py-2 rounded-full bg-[#181818] text-white font-medium"
          // onClick={...} // yahan aap apni send logic laga sakte hain
        >
          Send
        </button>
      </div>
    </Modal>
  );
}