import { useState } from "react";
import { landlordpic } from "../../../assets/export";
import BlockModal from "../block/BlockModal";

export default function HeaderDetail({tenant , blockTenant , isOpen , setIsOpen}) {
  
 console.log(tenant,"tenant")
  return (
    <div className=" pb-28 bg-white rounded-[8px] p-4">
      <div className="w-full   flex items-center  relative ">
        <img src={landlordpic} alt="" />

       

        <div className="mt-6 absolute -bottom-20 px-4 flex items-center justify-between w-full">
          <div className="flex items-center gap-4 ">
            <div className="w-[120px] h-[120px] rounded-full object-cover bg-black ">
              <img src={tenant.profilePicture} alt="landlord" className="w-full h-full object-cover rounded-full" />
            </div>
            <p className="text-[28px] font-[500] flex flex-col text-[#181818] pt-12">
              {" "}
              {tenant.name}{" "}
              <span className="text-[16px] font-[400] text-[#181818]">
                Tenant 
              </span>
            </p>
          </div>
          {tenant?.isBlocked === true ? <button onClick={() => setIsOpen(!isOpen)} className="text-[#FFF] bg-[#DC1D00] px-8 py-2 rounded-[40px] mt-12 border-[1px] border-[#E3DBDB]">Remove from Block list</button> : <button onClick={() => setIsOpen(!isOpen)} className="text-[#DC1D00] px-8 py-2 rounded-[40px] mt-12 border-[1px] border-[#E3DBDB]">Add to Block list</button>}


        </div>
      </div>
      <BlockModal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} block={blockTenant}  user={tenant}/>
    </div>
  );
}
