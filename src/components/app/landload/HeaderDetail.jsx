import { landlordpic } from "../../../assets/export";

export default function HeaderDetail() {
  return (
    <div className=" pb-28 bg-white rounded-[8px] p-4">
      <div className="w-full   flex items-center  relative ">
        <img src={landlordpic} alt="" />

        <div className="absolute top-4 right-6  backdrop-blur-[24px] grid grid-cols-3 border-[1px] border-[#FFFFFF1A] rounded-[8px] ">
          <div className="w-full   text-white   space-y-1 p-4 rounded-l-[8px] border-r-[1px] border-[#FFFFFF1A]">
            <p className="text-[16px] font-[400] ">Total Properties</p>
            <p className="text-[28px] font-[500] ">1000</p>
          </div>
          <div className="w-full   text-white     space-y-1 p-4 border-r-[1px] border-[#FFFFFF1A]">
            <p className="text-[16px] font-[400] ">Linked Properties</p>
            <p className="text-[28px] font-[500] ">460</p>
          </div>
          <div className="w-full   text-white   space-y-1 p-4 border-r-[1px] border-[#FFFFFF1A]">
            <p className="text-[16px] font-[400] ">Unlinked Properties</p>
            <p className="text-[28px] font-[500] ">540</p>
          </div>
        </div>

        <div className="mt-6 absolute -bottom-20 px-4 flex items-center justify-between w-full">
          <div className="flex items-center gap-4 ">
            <div className="w-[120px] h-[120px] rounded-full object-cover bg-black ">
              <img src="" alt="landlord" />
            </div>
            <p className="text-[28px] font-[500] flex flex-col text-[#181818] pt-12">
              {" "}
              Justin Timberlake{" "}
              <span className="text-[16px] font-[400] text-[#181818]">
                Landlord Name
              </span>
            </p>
          </div>
          <button className="text-[#DC1D00] px-8 py-2 rounded-[40px] mt-12 border-[1px] border-[#E3DBDB]">Add to Block list</button>
        </div>
      </div>
      
    </div>
  );
}
