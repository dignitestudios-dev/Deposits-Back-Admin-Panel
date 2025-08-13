import LandLordList from "../../../components/app/landload/LandLordList";
import Filter from "../../../components/app/tenant/Filter";

export default function Landlord() {
    return (
        <div className="bg-white rounded-[10px] p-6 space-y-6">
            <Filter name="Landlord"/>
            <LandLordList/>
        </div>
    );
}