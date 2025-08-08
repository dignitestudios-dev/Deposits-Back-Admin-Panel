export default function ToggleButton({activeTab , setActiveTab}) {
    return (
    <div className="flex items-center mt-6 mb-4">
        <div className="flex bg-[#F6F6F6] rounded-[28px] p-1 relative">
          <button
            className={`px-12 py-2 rounded-full font-medium text-[15px] transition-all duration-200 ${
              activeTab === "landlords"
                ? "bg-[#181818] text-white"
                : "bg-transparent text-[#181818]"
            }`}
            onClick={() => setActiveTab("landlords")}
          >
            Landlords
           
          </button>
          <button
            className={`px-12 py-2 rounded-full font-medium text-[15px] transition-all duration-200 ${
              activeTab === "tenants"
                ? "bg-[#181818] text-white"
                : "bg-transparent text-[#181818]"
            }`}
            onClick={() => setActiveTab("tenants")}
          >
            Tenants
          </button>
        </div>
      </div>
    );
}