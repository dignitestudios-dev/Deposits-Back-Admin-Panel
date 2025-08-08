import { landlordpic } from "../../../assets/export";

export default function HeaderDetail() {
  return (
    <div className=" pb-28 bg-white rounded-[8px] p-4">
      <div className="w-full   flex items-center  relative ">
        <img src={landlordpic} alt="" />

       

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
