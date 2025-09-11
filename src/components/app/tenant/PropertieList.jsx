import { FiEdit } from "react-icons/fi";
import { CiMenuKebab } from "react-icons/ci";
import { useNavigate } from "react-router";
const badgeClass = (status) => {
  if (status === "Paid") return "bg-green-100 text-green-700";
  if (status === "Pending") return "bg-yellow-100 text-yellow-700";
  if (status === "Unpaid") return "bg-red-100 text-red-700";
  return "bg-gray-200 text-gray-700";
};
export default function PropertieList({properties}) {
  console.log(properties,"properties")
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
            <span>{item.uniquePropertyCode}</span>
          </div>
          <div className="text-[#181818] font-medium underline cursor-pointer">
            {item.name}
          </div>
          <div>{item.type}</div>
          <div>${item.rent}</div>
          <div>{item.status}</div>
          <div className="flex items-center justify-between">
            <span
              className={`px-4 py-1 rounded-full text-[13px] font-medium ${badgeClass(
                item.paymentStatus
              )} `}
            >
              {item.paymentStatus}
            </span>
            <button onClick={() => navigate(`/properties/${item._id}`)} className=" text-right"><CiMenuKebab /></button>
          </div>
          
        </div>
      ))}
    </div>
  );
}