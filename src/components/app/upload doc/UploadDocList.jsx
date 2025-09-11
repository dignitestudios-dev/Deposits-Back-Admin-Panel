import { useNavigate } from "react-router";
import UploadDropDown from "./UploadDropDown";
import DeleteModal from "../notification/DeleteModal";
import { useState } from "react";
import { dateFormate } from "../../../lib/helpers";
import { AiOutlineLink } from "react-icons/ai";
import { pdf } from "../../../assets/export";
import axios from "../../../axios";
import { SuccessToast } from "../../global/Toaster";
import Pagination from "../../global/Pagination";
export default function UploadDocList({documentList,getDocumentList,pagination,setPageNo}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedText, setSelectedText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [selectedDocumentId, setSelectedDocumentId] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
   
    const openModal = (text) => {
      setSelectedText(text);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setSelectedText("");
      setIsModalOpen(false);
    };
    const handleDelete = async () => {
      setIsLoading(true)
        try {
        const response = await axios.delete(`/admin/deleteDoc/${selectedDocumentId}`);
        if (response.status === 201 ) {
          SuccessToast("Document deleted successfully");
          setIsOpen(false);
          setSelectedDocumentId(null);
          getDocumentList();
        }
      } catch (error) {
        console.error("Error deleting document:", error);
      }finally{
        setIsLoading(false)
        }
    };
      return (
    <div className="bg-white  ">
        <div className="flex items-center pb-6">
        <p className="text-[16px] flex items-center gap-2 font-[500] text-[#181818]">
          <span className="h-[32px] w-[12px] bg-gradient-to-t from-[#003897] to-[#0151DA] rounded-[4px]"></span>
          Upload Document
        </p>
      </div>
      {/* Header */}
        <div className="grid grid-cols-6 font-[400] bg-gray-50 py-4 px-2 rounded-[10px] text-[14px] text-gray-700">
        <div className="pl-2">Document Title</div>
        <div>Category</div>
        <div>Date Modified</div>
        <div>State Uploaded For</div>
       
        <div>Files</div>
        <div>Action</div>
      </div>
      {/* Rows */}
{documentList?.map((doc,idx)=>(
    <div key={idx}
        className={`grid grid-cols-6 items-center py-1 px-2 text-sm border-b overflow-y-auto`}
      >
        <div className="flex items-center gap-2 pl-2">
          {/* <img
                src={avatar
                alt={name
                className="w-7 h-7 rounded-full object-cover"
              /> */}
          <span className="truncate max-w-[120px]">{doc.title}</span>
        </div>
        <div className="truncate">{doc.type}</div>
        <div>
        {dateFormate(doc.updatedAt)}
        </div>
        <div>{doc.state}</div>
        
        <div className="bg-[#F6F6F6] py-3 px-3 w-[170px] rounded-[10px]">
        <span className="rounded-full  font-semibold text-xs ">
  {doc.lawLink ? (
    <a
      href={doc.lawLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline flex items-center gap-1"
    >
         <img src={pdf} alt="" className=" text-[16px] " />View / Download File
    </a>
  ) : doc.formLink ? (
    <a
      href={doc.formLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline flex items-center gap-1"
    >
  <AiOutlineLink className="text-[20px] text-gray-600"/>    Open Link
    </a>
  ) : doc.text ? (
    <span
      onClick={() => openModal(doc.text)}
      className="text-gray-800 cursor-pointer hover:underline"
    >
      {doc.text?.length > 20
        ? doc.text.slice(0, 20) + "..."
        : doc.text}
    </span>
  )  : (
    <span className="text-red-500">No Document</span>
  )}
</span>

        </div>
        <div
          onClick={() => {setIsOpen(!isOpen) ; setSelectedDocumentId(doc._id)}}
          className=" cursor-pointer text-[#DC1D00] font-medium text-xs"
        >
          Delete
        </div>
      </div>
))}
            <DeleteModal isOpen={isOpen} onClose={() => setIsOpen(false)} onDelete={()=>handleDelete()} loading={isLoading}/>
            {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <h2 className="text-lg font-semibold mb-4">Document Text</h2>
            <p className="text-gray-700 whitespace-pre-line">{selectedText}</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-end my-6">
      <Pagination pagnition={pagination} setPageNo={setPageNo}/>
      </div>
    </div>
  );
}
