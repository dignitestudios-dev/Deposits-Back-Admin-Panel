import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import UploadDropDown from "./UploadDropDown";
import { FaFilePdf, FaLink } from "react-icons/fa";
import { PiTextTBold } from "react-icons/pi";
export default function    UploadDocBar({setDropDownModal}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className="flex items-center relative justify-between bg-[#Ffff] border border-[#ECECEC] rounded-[10px] px-4 py-3 mb-4">
              <span className="font-semibold text-[15px] text-[#181818]">Upload Document</span>
              <button onClick={() => setModalIsOpen(!modalIsOpen)} className="flex items-center gap-2 bg-[#181818] text-white rounded-full px-5 py-2 font-[500] text-[14px] hover:bg-[#222] transition-all">
                <FiPlus size={16} />
                Upload Document
              </button>
              {modalIsOpen && (
        <div className="absolute right-0 -bottom-[132px] w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5 z-10">
          <ul className="py-1 text-gray-700">
            <li onClick={() => {setModalIsOpen(!modalIsOpen);setDropDownModal("file")}} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FaFilePdf className="text-red-500" /> Upload as a file
            </li>
            <li onClick={() => {setModalIsOpen(!modalIsOpen);setDropDownModal("link")}} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FaLink className="text-blue-500" /> Upload as a link
            </li>
            <li onClick={() => {setModalIsOpen(!modalIsOpen);setDropDownModal("text")}} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <PiTextTBold  className="text-gray-500" /> Upload as text
            </li>
          </ul>
        </div>
      )}
     
            </div>
    );
}