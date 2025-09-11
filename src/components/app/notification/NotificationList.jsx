import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import Pagination from "../../global/Pagination";
import axios from "../../../axios";
import { SuccessToast } from "../../global/Toaster";
import DeleteModal from "./DeleteModal";

export default function NotificationList({Notification,pagination,setPage ,getNotificationList}) {
 const [isOpen, setIsOpen] = useState(false);
 const [selectedDocumentId, setSelectedDocumentId] = useState(null);
 const [loading, setLoading] = useState(false);

  console.log(Notification,"Notification")
  const handleDelete = async () => {
    try {
      setLoading(true)
      const response = await axios.delete(`/admin/deleteNotification/${selectedDocumentId}`);
      if (response.data.status === "success" ) {
        SuccessToast("Notification deleted successfully");
        setIsOpen(false);
        setSelectedDocumentId(null);
        getNotificationList();       
      }
    } catch (error) {
      console.error("Error deleting notification:", error );
    }finally{
      setLoading(false)
    }
  };
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
      {Notification.map((item, idx) => (
        <div
          key={idx}
          className="grid grid-cols-5 items-center  px-4 text-sm border-b "
        >
          <div className="truncate max-w-[120px]">{item.title.length > 15 ? item.title.slice(0, 12) + "..." : item.title}</div>
          <div className="truncate col-span-2 bg-[#F6F6F6] border border-[#E6E6E6]  px-3 py-4">{item.description}</div>
          <div className="pl-20">{item.type}</div>
          <div className="text-end">
            <button
              onClick={() => {setIsOpen(!isOpen) ; setSelectedDocumentId(item._id)}}
              className="text-red-500 hover:bg-red-100 rounded-full  transition justify-end"
              title="Delete Notification"
            >
              <FiTrash2 size={18} />
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-end my-4">
                  <Pagination pagnition={pagination} setPageNo={setPage}/>
                </div>
                <DeleteModal isOpen={isOpen} onClose={() => setIsOpen(false)} onDelete={()=>handleDelete()} loading={loading}/>
    </div>
  );
}