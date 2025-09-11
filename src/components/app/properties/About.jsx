import { useState } from "react";
import BlockModal from "../block/BlockModal";
import BlockDeletedModal from "../block/BlockDeletedModal";

export default function About({ property, blockProperty, isOpen, setIsOpen , unblockProperty , deleteModalIsOpen , setDeleteModalIsOpen }) {
  
  const [userInfo, setUserInfo] = useState(null);
  console.log(property, "property");
  return (
    <div className="flex flex-col gap-4 bg-white rounded-[10px] p-4 mt-4">
      <div className="flex items-center justify-between w-full">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-[22px] font-bold text-[#181818] mb-0">
              {property?.name}
            </h2>
            <span className="bg-[#E8FFF3] text-[#4CD964] px-4 py-1 rounded-full text-[13px] font-medium">
              {property?.status}
            </span>
          </div>
          <p className="text-[14px] text-[#5B5B5B] mt-1 mb-0">
            {property?.address}
          </p>
        </div>
        {property?.isBlocked === true ? (
          <button
            onClick={() => {setDeleteModalIsOpen(!deleteModalIsOpen); setUserInfo(property);}}
            className="text-[#FFF] bg-[#DC1D00] px-8 py-2 rounded-[40px] mt-12 border-[1px] border-[#E3DBDB]"
          >
            Remove from Block list
          </button>
        ) : (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#DC1D00] px-8 py-2 rounded-[40px] mt-12 border-[1px] border-[#E3DBDB]"
          >
            Add to Block list
          </button>
        )}
      </div>
      <div className="   grid grid-cols-2 gap-2">
        {property?.images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Small 2"
            className="w-full h-[200px] object-cover rounded-lg"
          />
        ))}
      </div>
      <div className="pt-2">
        <p className="font-semibold text-[16px] text-[#181818] mb-1">
          About Property
        </p>
        <p className="text-[14px] text-[#5B5B5B]">{property?.description}</p>
      </div>
      <BlockModal
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        block={blockProperty}
        user={property}
      />
      <BlockDeletedModal isOpen={deleteModalIsOpen} onClose={() => setDeleteModalIsOpen(!deleteModalIsOpen)} userInfo={userInfo} unblock={unblockProperty}  />
    </div>
  );
}
