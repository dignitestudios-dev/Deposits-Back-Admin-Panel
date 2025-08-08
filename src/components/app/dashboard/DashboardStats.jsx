export default function DashboardStats() {
    return (
        <div className="w-full grid grid-cols-5 rounded-[8px]  py-4">
            <div className="w-full  bg-[#FFFFFF]  space-y-1 p-4 rounded-l-[8px] border-r-[1px] border-[#E3DBDB]">
                <p className="text-[16px] font-[400] text-[#181818]">Total Properties</p>
                <p className="text-[28px] font-[500] text-[#181818]">1000</p>
                <p className="text-[14px] font-[300] text-[#181818]">from last 7 days</p>
            </div>
            <div className="w-full  bg-[#FFFFFF]  space-y-1 p-4 border-r-[1px] border-[#E3DBDB]">
                <p className="text-[16px] font-[400] text-[#181818]">Linked Properties</p>
                <p className="text-[28px] font-[500] text-[#181818]">460</p>
                <p className="text-[14px] font-[300] text-[#181818]">from last 7 days</p>
            </div>
            <div className="w-full  bg-[#FFFFFF]  space-y-1 p-4 border-r-[1px] border-[#E3DBDB]">
                <p className="text-[16px] font-[400] text-[#181818]">Unlinked Properties</p>
                <p className="text-[28px] font-[500] text-[#181818]">540</p>
                <p className="text-[14px] font-[300] text-[#181818]">from last 7 days</p>
            </div>
            <div className="w-full  bg-[#FFFFFF]  space-y-1 p-4 border-r-[1px] border-[#E3DBDB]">
                <p className="text-[16px] font-[400] text-[#181818]">Total Tenants</p>
                <p className="text-[28px] font-[500] text-[#181818]">156</p>
                <p className="text-[14px] font-[300] text-[#181818]">from last 7 days</p>
            </div>
            <div className="w-full  bg-[#FFFFFF] rounded-r-[8px] space-y-1 p-4">
                <p className="text-[16px] font-[400] text-[#181818]">Total Landlords</p>
                <p className="text-[28px] font-[500] text-[#181818]">244</p>
                <p className="text-[14px] font-[300] text-[#181818]">from last 7 days</p>
            </div>
            
        </div>
    );
}