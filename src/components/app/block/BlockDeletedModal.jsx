import React from "react";
import Modal from "react-modal";
import { FiX } from "react-icons/fi";

// Make sure your app root id is 'root'
Modal.setAppElement("#root");

export default function BlockDeletedModal({
  isOpen,
  onClose,
  onUnblock,
  user = {
    name: "Justin Timberlake",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    role: "Landlord",
  },
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 outline-none relative"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
      >
        <FiX />
      </button>

      {/* User Info */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-[15px] text-[#181818]">{user.name}</div>
          <div className="text-xs text-[#565656]">{user.role}</div>
        </div>
      </div>

      {/* Title */}
      <div className="font-semibold text-[17px] mb-2">Unblock User</div>

      {/* Description */}
      <div className="text-[13px] text-[#181818] mb-8">
        Lorem Et Ultricies Tincidunt Lacinia Maecenas Erat. Non Lacus At Eget Auctor Ultrices Volutpat Vitae Vestibulum. Ut Elit Soelerisque Vivamus In Mauris Viverra Et Eros.
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 border-t pt-4">
        <button
          className="px-6 py-2 rounded-full bg-white border border-[#E6E6E6] text-[#181818] font-medium"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="px-8 py-2 rounded-full bg-[#F04438] text-white font-medium"
          onClick={onUnblock}
        >
          Unblock
        </button>
      </div>
    </Modal>
  );
}