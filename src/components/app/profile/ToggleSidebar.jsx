import { MdOutlineEmail } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import { profile_blue } from "../../../assets/export";

export default function ToggleSidebar({ setOpenSidebar, openSidebar , profileDetail}) {
    return (
        <div className="">
            <div
                        className="flex flex-col justify-center items-center gap-3 bg-white rounded-[10px] p-4 "
                        
                      >
                        <img
                          src={profileDetail?.profilePicture}
                          alt=""
                          className="w-[70px] h-[70px] rounded-full bg-slate-300"
                        />
                        <p className="text-[16px] font-[500] text-[#181818]">{profileDetail?.name}</p>
                        <p className="text-[#FF9500] bg-[#FF95001A] px-12 py-1 rounded-full">
                          {profileDetail?.status}
                        </p>
                        <div className="bg-[#F6F6F6] w-[250px] border border-[#E3DBDB] rounded-[8px]  px-2 py-4 space-y-4">
                          <div className="flex items-start  gap-2">
                            <MdOutlineEmail size={22} />
                            <p className="text-[16px] flex flex-col font-[500] text-[#181818]">
                              Email
                              <span className="text-[14px] font-[500] text-[#565656]">
                                {profileDetail?.email}
                              </span>
                            </p>
                          </div>
                          <div className="flex items-start  gap-2">
                            <RiMenu2Line size={22} />
                            <p className="text-[16px] flex flex-col font-[500] text-[#181818]">
                              Last four digits of SSN
                              <span className="text-[14px] font-[500] text-[#565656]">
                                  {profileDetail?.lastFourSSN}
                              </span>
                            </p>
                          </div>
                          
                        </div>
                        <div className="mb-2">
          <p className="font-semibold text-[16px] mb-1">Government ID</p>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <img src={profileDetail?.governmentIdFront} alt="ID Front" className="w-36 h-20 rounded-md object-cover border" />
              <span className="text-[13px] text-[#7D7D7D] mt-1">Front</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={profileDetail?.governmentIdBack} alt="ID Back" className="w-36 h-20 rounded-md object-cover border" />
              <span className="text-[13px] text-[#7D7D7D] mt-1">Back</span>
            </div>
          </div>
        </div>
        <button onClick={() => setOpenSidebar(!openSidebar)} className=" w-[240px] flex items-center justify-center text-[18px] text-[#181818] gap-2 font-[400] border border-[#E3DBDB] rounded-full p-1 ">
                           close
                            
                          </button>
                      </div>
        </div>
    )
}