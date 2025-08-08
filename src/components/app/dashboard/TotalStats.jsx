export default function TotalStats() {
    return (
        <div className="w-[40%] h-[420px] flex flex-col gap-2">
            <div className="w-full  h-[200px] flex flex-col justify-between  bg-[#FFFFFF]  space-y-1 p-4 rounded-[8px]">
                <p className="text-[16px] font-[500] text-[#181818]">Total deposit submitted
                </p>
                <p className="text-[28px] font-[500] text-[#181818]">$15687</p>
                    
            </div>
            <div className="w-full h-[200px] flex flex-col justify-between  bg-[#FFFFFF] rounded-[8px] space-y-1 p-4">
                <p className="text-[16px] font-[500] text-[#181818]">No. of Lease completed</p>
                <p className="text-[28px] font-[500] text-[#181818]">244</p>
                
            </div>
        </div>
    );
}