import { FiUser, FiExternalLink, FiDownload } from "react-icons/fi";
import { FaFilePdf, FaRegImage } from "react-icons/fa";
import { useState } from "react";
import { manageusers } from "../../../assets/export";
import { RxVideo } from "react-icons/rx";
import { useNavigate } from "react-router";

const agreements = [
  {
    label: "Lease Agreement",
    url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // Replace with your PDF URL
  },
  {
    label: "Contract Agreement",
    url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // Replace with your PDF URL
  },
];

const downloadFile = (url, label) => {
  
    window.open(url, "_blank");

}

export default function TenantAgreements({property}) {
  const [activeTab, setActiveTab] = useState("agreements");
  const navigate = useNavigate()
  return (
    <div className="bg-white rounded-[12px] p-5 w-full max-w-[420px] mt-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-[40px] h-[40px] rounded-full border-black border-[1px] flex items-center justify-center">
          <img src={manageusers} alt="" className="w-[20px] h-[20px]"/>
        </div>
        <span className="font-semibold text-[18px]">Tenant</span>
      </div>
      {/* Profile */}
      <div className="flex items-center gap-4 mb-4 px-2">
        <img
          src={property?.tenant?.profilePicture}
          alt="Tenant"
          className="w-[72px] h-[72px] rounded-full object-cover"
        />
        <span className="font-semibold text-[20px]">{property?.tenant?.name}</span>
        <button onClick={()=>navigate(`/tenants/${property.tenant._id}`)}>

        <FiExternalLink className="ml-auto text-[20px] cursor-pointer" />
        </button>
      </div>
      {/* Tabs */}
      <div className="flex gap-2 mb-4 bg-[#F2F2F2] rounded-[10px] p-2">
        <button onClick={() => setActiveTab("agreements")} className={`  text-[#181818] font-medium px-4 py-2 rounded-lg  ${activeTab === "agreements" ? "bg-white px-4 py-2 rounded-lg" : ""}`}>
          Agreements
        </button>
        <button onClick={() => setActiveTab("repairs")} className={`text-[#181818] font-medium px-4 py-2 rounded-lg ${activeTab === "repairs" ? "bg-white px-4 py-2 rounded-lg" : ""}`}>
          Repairs
        </button>
      </div>
      {/* Agreements List */}
{activeTab === "agreements" && (
      <div className="flex flex-col gap-3">
        
        { property?.tenant?.agreements&& property?.tenant?.agreements.length>0 ? property?.tenant?.agreements?.map((ag, idx) => (
          <div
            key={idx}
            className="flex items-center bg-[#F3F8FF] rounded-[10px] px-4 py-3"
          >
            <FaFilePdf className="text-[#F24E1E] text-[26px] mr-3" />
            <span className="font-[400] text-[16px] flex-1">{ag.label}</span>
            <button
              onClick={() => downloadFile(ag.url, ag.label)}
              className="ml-2 p-2 rounded-full hover:bg-[#E6F0FA] transition"
              title="Download"
            >
              <FiDownload className="text-[24px]" />
            </button>
          </div>
        )): (
          <p className="text-gray-500 text-center py-4">Not found</p>
        )}
      </div>
)}   
{activeTab === "repairs" && (
      <div className="flex flex-col gap-3 overflow-y-scroll h-[200px]">
         <p className="font-[400] text-[16px] flex-1">Videos</p>
      {property?.tenant?.repairVideos&& property?.tenant?.repairVideos.length>0 ? (property?.tenant?.repairVideos?.map((agreement, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-[#F3F8FF] rounded-[10px] px-4 py-3"
                >
                  <RxVideo className="text-[#003897] text-[26px] mr-3" />
                  <span className="font-[400] text-[16px] flex-1">{agreement.fileKey}</span>
                  <button
                    onClick={() => downloadFile(agreement.fileUrl, agreement.fileKey)}
                    className="ml-2 p-2 rounded-full hover:bg-[#E6F0FA] transition"
                    title="Download"
                  >
                    <FiDownload className="text-[24px]" />
                  </button>
                </div>
              ))):(
                <p className="text-gray-500 text-center py-4">Not found</p>
              )}
              <p className="font-[400] text-[16px] flex-1">Images</p>
              
              {property?.tenant?.repairImages && property.tenant.repairImages.length > 0 ? (
  property.tenant.repairImages.map((agreement, idx) => (
    <div
      key={idx}
      className="flex items-center bg-[#F3F8FF] rounded-[10px] px-4 py-3"
    >
      <FaRegImage className="text-[#003897] text-[26px] mr-3" />
      <span className="font-[400] text-[16px] flex-1">{agreement.fileKey}</span>
      <button
        onClick={() => downloadFile(agreement.fileUrl, agreement.fileKey)}
        className="ml-2 p-2 rounded-full hover:bg-[#E6F0FA] transition"
        title="Download"
      >
        <FiDownload className="text-[24px]" />
      </button>
    </div>
  ))
) : (
  <p className="text-gray-500 text-center py-4">Not found</p>
)}

      </div>
)}   
 </div>
  );
}