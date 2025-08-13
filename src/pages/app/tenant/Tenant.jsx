import Filter from "../../../components/app/tenant/Filter";
import TenantLists from "../../../components/app/tenant/TenantList";


export default function Tenant() {
    return (
        <div className="bg-white rounded-[10px] p-6 space-y-6">
            <Filter name="Tenant"/>
        <TenantLists/>
        </div>
    );
}