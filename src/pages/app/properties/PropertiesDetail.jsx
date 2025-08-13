import BackBar from "../../../components/app/properties/BackBar";
import About from "../../../components/app/properties/About";
import RentHistory from "../../../components/app/properties/RentHistory";
import Reviews from "../../../components/app/properties/Reviews";
import TenantAgreements from "../../../components/app/properties/TenantAgreements";
import LandlordAgreements from "../../../components/app/properties/LandLordAgreementS";
import LandLordRules from "../../../components/app/properties/LandLordRules";

export default function PropertiesDetail() {
    return (
        <div>
            <BackBar/>
            <div className="flex gap-4">
            <div className="">
            <About/>
            <RentHistory/>
            </div>
            <div className="w-[40%] pt-4">
                <Reviews/>
               <TenantAgreements/>
               <LandlordAgreements/>
               <LandLordRules/>
            </div>
            </div>
        </div>
    );
}