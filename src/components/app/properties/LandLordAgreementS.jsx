import { FiUser, FiExternalLink, FiDownload } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa";
import { useState } from "react";
import { manageusers } from "../../../assets/export";

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
  fetch(url)
    .then(res => res.blob())
    .then(blob => {
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${label}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    })
    .catch(err => {
      console.error("Failed to download:", err);
      alert("Failed to download the file.");
    });
}

export default function LandlordAgreements() {
  const [activeTab, setActiveTab] = useState("agreements");
  return (
    <div className="bg-white rounded-[12px] p-5 w-full max-w-[420px] my-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-[40px] h-[40px] rounded-full border-black border-[1px] flex items-center justify-center">
          <img src={manageusers} alt="" className="w-[20px] h-[20px]"/>
        </div>
        <span className="font-semibold text-[18px]">Landlord</span>
      </div>
      {/* Profile */}
      <div className="flex items-center gap-4 mb-4 px-2">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Tenant"
          className="w-[72px] h-[72px] rounded-full object-cover"
        />
        <span className="font-semibold text-[20px]">Landlord Name</span>
        <FiExternalLink className="ml-auto text-[20px] cursor-pointer" />
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
      <div className="flex flex-col gap-3">
        {agreements.map((ag, idx) => (
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
        ))}
      </div>
    </div>
  );
}