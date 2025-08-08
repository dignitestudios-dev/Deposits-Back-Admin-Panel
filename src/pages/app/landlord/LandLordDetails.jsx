import BackBar from "../../../components/app/landload/BackBar";
import Filter from "../../../components/app/landload/Filter";
import HeaderDetail from "../../../components/app/landload/HeaderDetail";
import LandLordContact from "../../../components/app/landload/LandLordContact";
import PropertieList from "../../../components/app/landload/PropertieList";

export default function LandLordDetails() {
  return (
    <div className="space-y-4">
      <BackBar />
      <HeaderDetail />
      <div className="w-full flex gap-4">
        <div className="w-full h-full space-y-4 bg-white rounded-[10px] p-4">
          <Filter />
          <PropertieList />
        </div>
        <div className="w-[55%]     h-full bg-white rounded-[10px] p-4">
          <LandLordContact />
        </div>
      </div>
    </div>
  );
}
