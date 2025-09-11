export default function Skeleton() {
    return (
      <div className="rounded-[16px] overflow-x-auto p-0 mt-6">
        {/* Header */}
        <div className="grid grid-cols-8 text-[#565656] bg-[#F6F6F6] font-semibold text-[13px] rounded-[16px] py-5 px-4">
          <div className="text-left">Tenant Name</div>
          <div className="text-left">Onboard Date</div>
          <div className="text-left">Registered Properties</div>
          <div className="text-left">Subscription Plan</div>
          <div className="text-left">Price</div>
          <div className="text-left">App Revenue</div>
          <div className="text-left">Status</div>
          <div className="text-left"></div>
        </div>
  
        {/* Skeleton Rows */}
        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            className="grid grid-cols-8 items-center px-4 py-4 border-b last:border-0 animate-pulse"
          >
            {/* Tenant Name */}
            <div className="flex items-center gap-2 min-w-[150px]">
              <div className="w-6 h-6 rounded-full bg-gray-300"></div>
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
            </div>
            <div className="h-4 w-24 bg-gray-300 rounded"></div>
            <div className="h-4 w-16 bg-gray-300 rounded"></div>
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
            <div className="h-4 w-12 bg-gray-300 rounded"></div>
            <div className="h-4 w-16 bg-gray-300 rounded"></div>
            <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-16 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    );
  }
  