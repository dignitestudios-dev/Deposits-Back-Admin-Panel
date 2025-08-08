import { FiMail, FiPhone, FiGift } from "react-icons/fi";

export default function LandLordContact() {
  return (
    <div className="w-full flex flex-col gap-3">
      {/* Contact Card */}
      <div className="bg-[#F8F8F8] rounded-xl p-6  border border-[#F6F6F6]">
        <p className="font-semibold text-[18px] mb-4">Contacts</p>
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 bg-white border border-[#E4E4E4] rounded-full px-4 py-2 w-fit">
            <FiMail className="text-[#181818]" />
            <span className="text-[15px]">Justintimberlake@Gmail.Com</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-[#E4E4E4] rounded-full px-4 py-2 w-fit">
            <FiPhone className="text-[#181818]" />
            <span className="text-[15px]">+1 834 0570 746</span>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-[16px] mb-1">Location</p>
          <div className="flex items-center gap-2">
            <img src="https://flagcdn.com/us.svg" alt="USA" className="w-7 h-5 rounded object-cover" />
            <span className="text-[15px]">USA</span>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-semibold text-[16px] mb-1">Last four digits of SSN</p>
          <span className="text-[15px]">4542</span>
        </div>
        <div className="mb-2">
          <p className="font-semibold text-[16px] mb-1">Government ID</p>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/med/women/75.jpg" alt="ID Front" className="w-36 h-20 rounded-md object-cover border" />
              <span className="text-[13px] text-[#7D7D7D] mt-1">Front</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/med/women/75.jpg" alt="ID Back" className="w-36 h-20 rounded-md object-cover border" />
              <span className="text-[13px] text-[#7D7D7D] mt-1">Back</span>
            </div>
          </div>
        </div>
      </div>
      {/* Subscription Card */}
      <div className="bg-white rounded-xl p-6  border border-[#E3DBDB]">
        <p className="font-semibold text-[18px] mb-8">Subscription Plans</p>
        <div className="flex items-center justify-between border-b border-[#E3DBDB] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 flex items-center justify-center rounded bg-[#E8F0FE]">
              <FiGift className="text-[#1569BF]" size={22} />
            </div>
            <span className="font-semibold text-[16px]">Monthly Plan</span>
            <span className="text-[14px] text-[#7D7D7D]">(Basic Plan)</span>
          </div>
          <span className="font-bold text-[24px] text-[#181818]">$49.99</span>
        </div>
      </div>
    </div>
  );
}