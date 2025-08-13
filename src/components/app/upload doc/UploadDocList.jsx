import { useNavigate } from "react-router";
import UploadDropDown from "./UploadDropDown";
import DeleteModal from "../notification/DeleteModal";
import { useState } from "react";
export default function UploadDocList() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
      return (
    <div className="bg-white  ">
        <div className="flex items-center pb-6">
        <p className="text-[16px] flex items-center gap-2 font-[500] text-[#181818]">
          <span className="h-[32px] w-[12px] bg-gradient-to-t from-[#003897] to-[#0151DA] rounded-[4px]"></span>
          Upload Document
        </p>
      </div>
      {/* Header */}
      <div className="grid grid-cols-7 font-[400] bg-gray-50 py-4 px-2 rounded-[10px] text-[14px] text-gray-700">
        <div className="pl-2">Document Title</div>
        <div>Category</div>
        <div>Date Modified</div>
        <div>State Uploaded For</div>
        <div>Subscription Price</div>
        <div>Files</div>
        <div>Action</div>
      </div>
      {/* Rows */}

      <div
        className={`grid grid-cols-7 items-center py-4 px-2 text-sm border-b overflow-y-auto`}
      >
        <div className="flex items-center gap-2 pl-2">
          {/* <img
                src={avatar
                alt={name
                className="w-7 h-7 rounded-full object-cover"
              /> */}
          <span className="truncate max-w-[120px]">Golden State Lease Agreement</span>
        </div>
        <div className="truncate">Security Deposit Laws – State by State</div>
        <div>
          {/* <a
                href={row.propertyLink}
                className="text-blue-700 underline flex items-center gap-1"
              >
                dssadsa
              </a> */}
        </div>
        <div>02-20-2026</div>
        <div>Golden State</div>
        <div>
          <span className={`rounded-full px-4 py-1 font-semibold text-xs `}>
          File Title
          </span>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className=" cursor-pointer text-[#DC1D00] font-medium text-xs"
        >
          Delete
        </div>
      </div>
            <DeleteModal isOpen={isOpen} onClose={() => setIsOpen(false)}  />
    </div>
  );
}
