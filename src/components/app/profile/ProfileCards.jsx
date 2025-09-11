import { useState } from "react";

import { MdOutlineEmail } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
import { profile_blue } from "../../../assets/export";
import ToggleSidebar from "./ToggleSidebar";
import { dateFormate } from "../../../lib/helpers";
import Pagination from "../../global/Pagination";
const sampleUsers = [
  {
    id: "ESA001",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    joinDate: "2023-01-15",
    location: "New York, USA",
    status: "Pending",
  },
  {
    id: "ESA002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 (555) 987-6543",
    joinDate: "2023-02-20",
    location: "Los Angeles, USA",
    status: "Approved",
  },
  {
    id: "ESA003",
    name: "Robert Johnson",
    email: "robert.j@example.com",
    phone: "+1 (555) 456-7890",
    joinDate: "2023-03-10",
    location: "Chicago, USA",
    status: "Rejected",
  },
];

export default function ProfileCards({profile,pagination,setPage}) {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Pending", "Approved", "Rejected"];
const [openSidebar, setOpenSidebar] = useState(false);
const [profileDetail,setDetail]=useState({})
  return (
    <div className="space-y-4">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {profile.map((user,index) => (
          <div
            className="flex flex-col justify-center items-center gap-3 bg-white rounded-[10px] p-4 "
            key={index}
          >
            <img
              src={user?.profilePicture}
              alt=""
              className="w-[70px] h-[70px] rounded-full bg-slate-300"
            />
            <p className="text-[16px] font-[500] text-[#181818]">{user.name}</p>
            <p className="text-[#FF9500] bg-[#FF95001A] px-12 py-1 rounded-full">
              {user.status}
            </p>
            <div className="bg-[#F6F6F6] w-[250px] border border-[#E3DBDB] rounded-[8px]  px-2 py-4 space-y-4">
              <div className="flex items-start  gap-2">
                <MdOutlineEmail size={22} />
                <p className="text-[16px] flex flex-col font-[500] text-[#181818]">
                  Email
                  <span className="text-[14px] font-[500] text-[#565656]">
                    {user.email}
                  </span>
                </p>
              </div>
              <div className="flex items-start  gap-2">
                <RiMenu2Line size={22} />
                <p className="text-[16px] flex flex-col font-[500] text-[#181818]">
                  Last four digits of SSN
                  <span className="text-[14px] font-[500] text-[#565656]">
                    1234
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-16 p-2">
              <p className="text-[13px] font-[300] text-[#565656]">
                Joined on{" "}
                <span className="text-[13px] font-[400] text-[#181818]">
                {dateFormate(user.createdAt)}
                </span>
              </p>
              <button onClick={() => {setOpenSidebar(!openSidebar);setDetail(user)}} className=" text-[13px] flex items-center gap-2 font-[500] text-[#003897]">
                View{" "}
                <span>
                  <FiArrowRight size={20} />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={`fixed top-12 right-0 z-50 w-[350px] h-[calc(100vh-16px)] bg-[#FBFBFB] border-l-[1px] border-t-[1px] border-[#E3DBDB] ${openSidebar ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
      <ToggleSidebar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} profileDetail={profileDetail}/>
      </div>
      <div className="flex justify-end my-4">
      <Pagination pagnition={pagination} setPageNo={setPage}/>
    </div>
    </div>
  );
}
