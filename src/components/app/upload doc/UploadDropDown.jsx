// src/components/app/upload doc/UploadDocModal.jsx
import React from "react";
import Modal from "react-modal";
import { FiX, FiUpload } from "react-icons/fi";

// Make sure your app root id is 'root'
Modal.setAppElement("#root");

export default function UploadDropDown({ isOpen, onClose,  }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-6 outline-none relative"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
      >
        <FiX />
      </button>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-6">Upload New Document</h2>

      {/* Form */}
      <form  className="space-y-6">
        {/* Document Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Document Title
          </label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter document title"
          />
        </div>

        {/* Category */}

        {/* State */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State
          </label>
          <select
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select state</option>
            <option value="CA">California</option>
            <option value="NY">New York</option>
            <option value="TX">Texas</option>
            {/* Add more states as needed */}
          </select>
        </div>

        {/* File Upload */}
        {isOpen === "file" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload File
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <FiUpload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                  <span>Upload a file</span>
                  <input
                    type="file"
                    required
                    className="sr-only"
                    accept=".pdf,.doc,.docx"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
            </div>
          </div>
        </div>
        )}
        {/* {link upload} */}
{isOpen === "link" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Document URL
          </label>
          <input
            type="url"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com/document.pdf"
            pattern="https?://.+"
            title="Please enter a valid URL (http:// or https://)"
          />
          <p className="mt-1 text-xs text-gray-500">
            Enter the direct URL to your document
          </p>
        </div>
        )}
        {/* {text upload} */}
        {isOpen === "text" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subscription Price
          </label>
          <textarea
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter subscription price"
          />
        </div>
        )}
        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#181818] text-white rounded-full px-5 py-2 font-[500] text-[14px] hover:bg-[#222] transition-all"
          >
            Upload
          </button>
        </div>
      </form>
    </Modal>
  );
}
