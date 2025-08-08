import { FiEdit } from "react-icons/fi";
import { CiMenuKebab } from "react-icons/ci";
import { useNavigate } from "react-router";
const properties = [
  {
    code: "258496",
    name: "Property Title",
    type: "House",
    rent: "$1200",
    status: "Occupied",
    rentStatus: "Pending",
    rentStatusColor: "bg-[#FFD29D] text-[#FF9F1C]",
  },
  {
    code: "258496",
    name: "Property Title",
    type: "House",
    rent: "$1200",
    status: "Occupied",
    rentStatus: "Paid",
    rentStatusColor: "bg-[#E8FFF3] text-[#4CD964]",
  },
  {
    code: "258496",
    name: "Property Title",
    type: "House",
    rent: "$1200",
    status: "Vacant",
    rentStatus: "No Tenant",
    rentStatusColor: "bg-[#E6E6E6] text-[#7D7D7D]",
  },
  {
    code: "258497",
    name: "Property Title",
    type: "Apartment",
    rent: "$1300",
    status: "Occupied",
    rentStatus: "Pending",
    rentStatusColor: "bg-[#FFD29D] text-[#FF9F1C]",
  },
  {
    code: "258497",
    name: "Property Title",
    type: "Apartment",
    rent: "$1300",
    status: "Occupied",
    rentStatus: "Pending",
    rentStatusColor: "bg-[#FFD29D] text-[#FF9F1C]",
  },
  {
    code: "258497",
    name: "Property Title",
    type: "Apartment",
    rent: "$1300",
    status: "Occupied",
    rentStatus: "Pending",
    rentStatusColor: "bg-[#FFD29D] text-[#FF9F1C]",
  },
  {
    code: "258497",
    name: "Property Title",
    type: "Apartment",
    rent: "$1300",
    status: "Occupied",
    rentStatus: "Pending",
    rentStatusColor: "bg-[#FFD29D] text-[#FF9F1C]",
  },
  {
    code: "258497",
    name: "Property Title",
    type: "Apartment",
    rent: "$1300",
    status: "Occupied",
    rentStatus: "Pending",
    rentStatusColor: "bg-[#FFD29D] text-[#FF9F1C]",
  },
  {
    code: "258497",
    name: "Property Title",
    type: "Apartment",
    rent: "$1300",
    status: "Occupied",
    rentStatus: "Pending",
    rentStatusColor: "bg-[#FFD29D] text-[#FF9F1C]",
  },
];

export default function PropertieList() {
    const navigate = useNavigate();
  return (
    <div className="">
      {/* Header */}
      <div className="grid grid-cols-6 items-center px-4 py-4 bg-[#F8F8F8] rounded-[8px] font-semibold text-[#181818] text-[15px]">
        
        <div>Unique Code</div>
        <div>Name</div>
        <div>Type</div>
        <div>Rent</div>
        <div>Status</div>
        <div>Rent Status</div>
      </div>
      {/* Rows */}
      {properties.map((item, idx) => (
        <div
          key={idx}
          className="grid grid-cols-6 items-center px-4 py-4 border-b last:border-0 bg-white text-[15px]"
        >
          
          <div className="flex items-center gap-2 text-[#1569BF] font-medium underline cursor-pointer">
            <FiEdit size={16} />
            <span>{item.code}</span>
          </div>
          <div className="text-[#181818] font-medium underline cursor-pointer">
            {item.name}
          </div>
          <div>{item.type}</div>
          <div>{item.rent}</div>
          <div>{item.status}</div>
          <div className="flex items-center justify-between">
            <span
              className={`px-4 py-1 rounded-full text-[13px] font-medium ${item.rentStatusColor}`}
            >
              {item.rentStatus}
            </span>
            <button onClick={() => navigate(`/properties/1`)} className=" text-right"><CiMenuKebab /></button>
          </div>
          
        </div>
      ))}
    </div>
  );
}