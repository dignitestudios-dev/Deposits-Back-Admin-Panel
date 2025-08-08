import { IoMdArrowDropdown } from "react-icons/io";

const rentHistory = [
  {
    month: "June",
    tenant: { name: "Eleanor Pena", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    amount: "$1200",
    due: "June 1, 2025",
    paid: "---",
    status: "Pending",
    statusColor: "bg-[#FFD29D] text-[#FF9F1C]",
  },
  {
    month: "August",
    tenant: { name: "Eleanor Pena", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    amount: "$1200",
    due: "Aug 1, 2025",
    paid: "Aug 1, 2025",
    status: "Paid",
    statusColor: "bg-[#E8FFF3] text-[#4CD964]",
  },
  {
    month: "April",
    tenant: { name: "Eleanor Pena", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    amount: "$1200",
    due: "Apr 1, 2025",
    paid: "Apr 1, 2025",
    status: "Paid",
    statusColor: "bg-[#E8FFF3] text-[#4CD964]",
  },
  {
    month: "March",
    tenant: null,
    amount: "$1200",
    due: "Mar 1, 2025",
    paid: "---",
    status: "No Tenant",
    statusColor: "bg-[#E6E6E6] text-[#7D7D7D]",
  },
];

export default function RentHistory() {
  return (
    <div className="bg-white rounded-[8px] p-4 mt-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="w-[8px] h-[28px] bg-[#0057FF] rounded-[4px]" />
          <span className="font-semibold text-[16px] text-[#181818]">Rent History</span>
        </div>
        {/* Year Dropdown */}
        <button className="flex items-center border border-[#E4E4E4] bg-white px-4 py-2 rounded-full text-[15px] font-normal">
          2024-2025
          <IoMdArrowDropdown size={20} className="ml-1" />
        </button>
      </div>
      {/* Header Row */}
      <div className="grid grid-cols-6 items-center bg-[#F6F6F6] rounded-[8px] px-4 py-3 font-medium text-[#8C8C8C] text-[14px] mb-2">
        
        <div>Month</div>
        <div>Tenant</div>
        <div>Rent Amount</div>
        <div>Due Date</div>
        <div>Paid Date</div>
        <div>Rent Status</div>
      </div>
      {/* Data Rows */}
      {rentHistory.map((item, idx) => (
        <div
          key={idx}
          className="grid grid-cols-6 items-center bg-white px-4 py-3 border-b last:border-0 text-[15px]"
        >
         
          <div>{item.month}</div>
          <div className="flex items-center gap-2">
            {item.tenant ? (
              <>
                <img
                  src={item.tenant.avatar}
                  alt={item.tenant.name}
                  className="w-7 h-7 rounded-full object-cover"
                />
                <span className="truncate max-w-[80px]">{item.tenant.name}</span>
              </>
            ) : (
              "---"
            )}
          </div>
          <div>{item.amount}</div>
          <div>{item.due}</div>
          <div>{item.paid}</div>
          <div>
            <span
              className={`px-4 py-1 rounded-full text-[13px] font-medium ${item.statusColor}`}
            >
              {item.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}