import React, { useState } from "react";
import Modal from "react-modal";
import { FiX } from "react-icons/fi";
import { SuccessToast } from "../../global/Toaster";
import { useFormik } from "formik";

import axios from "../../../axios";
import { notificationValues } from "../../../init/app/App";
import { notificationSchema } from "../../../schema/app/AppSchema";
import { TbLoaderQuarter } from "react-icons/tb";
Modal.setAppElement("#root"); // make sure your app root id is 'root'

export default function CreateNotification({ isOpen, onClose ,getNotificationList}) {
  const [tab, setTab] = useState("landlord");
  
  const [isLoading, setIsLoading] = useState(false);
  
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
  useFormik({
    initialValues: notificationValues,
    validationSchema: notificationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, action) => {
      setIsLoading(true);
      
      const data = { title: values.title, description: values.detail , target: tab}; 
      try {
        const response = await axios.post(`/admin/notifications`, data);
        if (response.status === 200) {
          action.resetForm(); // Reset the form
          onClose();
         SuccessToast('Notification created successfully');
          getNotificationList()
        }
      } catch (error) {
        console.error("Error creating notification:", error);
        
      } finally {
        setIsLoading(false);
      }
    },
  });
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
      <form  onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}>
      <div className="mb-4">
        <label className="block font-semibold text-[14px] mb-1">Notification</label>
        <input 
        onChange={handleChange} 
        name="title" 
        onBlur={handleBlur}
        id="title" 
        className="bg-[#F6F6F6] w-full outline-none rounded-[6px] px-4 py-3 text-[14px] font-[400] text-[#181818]" 
        value={values.title}/>
      </div>

      {/* Send To Tabs */}
      <div className="mb-4">
        <label className="block font-semibold text-[14px] mb-1">Send To</label>
        <div className="flex gap-2">
          <button
            className={`flex-1 py-2 rounded-[8px] font-[400] text-[14px] transition ${
              tab === "landlord"
                ? "bg-gradient-to-t from-[#003897] to-[#0151DA] text-white"
                : "bg-white text-[#181818] border border-[#E6E6E6]"
            }`}
            onClick={() => setTab("landlord")}
          >
            Landlord
          </button>
          <button
            className={`flex-1 py-2 rounded-[8px] font-[400] text-[14px] transition ${
              tab === "tenant"
                ? "bg-gradient-to-t from-[#003897] to-[#0151DA] text-white"
                : "bg-white text-[#181818] border border-[#E3DBDB]"
            }`}
            onClick={() => setTab("tenant")}
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
          name="detail"
          onBlur={handleBlur}
          id="detail"
          value={values.detail}
          onChange={handleChange}
        />
        <div className="text-right text-[12px] text-[#181818] font-[400]">{values.detail.length}/1000</div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 mt-2">
        <button
          className="px-6 py-2 rounded-full bg-white border border-[#E6E6E6] text-[#181818] font-medium"
          onClick={onClose}
        >
          Cancel
        </button>
        {isLoading ? <button
          className="px-8 py-2 rounded-full bg-[#181818] text-white font-medium cursor-not-allowed justify-center items-center"
          onClick={onClose}
        >
          <TbLoaderQuarter size={25} className=" animate-spin justify-center items-center flex w-full" /> 
        </button> : <button
          className="px-8 py-2 rounded-full bg-[#181818] text-white font-medium"
          onClick={onClose}
        >
          Send
        </button>
        }
      </div>

      </form>
    </Modal>
  );
}