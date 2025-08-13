import React from "react";
import Modal from "react-modal";
import { FiX, FiTrash2 } from "react-icons/fi";

Modal.setAppElement("#root"); // Make sure your app root id is 'root'

export default function DeleteModal({ isOpen, onClose, onDelete }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      className="bg-white rounded-2xl shadow-xl w-full max-w-xs p-6 outline-none relative"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
      >
        <FiX />
      </button>

      {/* Trash Icon */}
      <div className="flex justify-center mb-2">
        <div className="bg-[#FFF2F0] rounded-full w-12 h-12 flex items-center justify-center">
          <FiTrash2 size={28} className="text-[#F04438]" />
        </div>
      </div>

      {/* Title */}
      <div className="text-center font-semibold text-lg mb-2">Delete Data</div>

      {/* Description */}
      <div className="text-center text-[13px] text-[#181818] mb-6">
        Lorem Et Ultricies Tincidunt Lacinia Maecenas Erat. Non Lacus At Eget Auctor Ultrices Volutpat Vitae Vestibulum.
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-2 border-t pt-4">
        <button
          className="flex-1 py-2 rounded-full bg-white border border-[#E6E6E6] text-[#181818] font-medium"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="flex-1 py-2 rounded-full bg-[#F04438] text-white font-medium"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}