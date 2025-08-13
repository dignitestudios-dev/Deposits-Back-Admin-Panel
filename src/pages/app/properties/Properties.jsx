
import Filter from "../../../components/app/properties/Filter";
import PropertiesList from "../../../components/app/properties/PropertiesList";

export default function Properties() {
    return (
        <div className=" bg-white rounded-[10px] p-6 space-y-6">
            <Filter />
            <PropertiesList />
        </div>
    );
}