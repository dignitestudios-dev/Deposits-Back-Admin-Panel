import UploadDocList from "../../../components/app/upload doc/UploadDocList";
import UploadDocBar from "../../../components/app/upload doc/UploadDocBar";
import UploadDropDown from "../../../components/app/upload doc/UploadDropDown";
import { useState } from "react";

export default function UploadLegalDoc() {
    const [dropDownModal, setDropDownModal] = useState(false);
    console.log(dropDownModal);
    return (
        <div className="">
            <UploadDocBar setDropDownModal={setDropDownModal}/>
            <div className="bg-white rounded-[10px] p-6 space-y-6">
            <UploadDocList/>
            {dropDownModal && <UploadDropDown isOpen={dropDownModal} onClose={() => setDropDownModal(false)}/>}
            
            </div>
        </div>
    );
}