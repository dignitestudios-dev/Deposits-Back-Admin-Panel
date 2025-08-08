import BarChart from "../../../components/app/dashboard/DashboardBarChart";
import DashboardBar from "../../../components/app/dashboard/DashboardBar";
import DashboardStats from "../../../components/app/dashboard/DashboardStats";
import DashboardBarChart from "../../../components/app/dashboard/DashboardBarChart";
import TotalStats from "../../../components/app/dashboard/TotalStats";

import FilterToolBar from "../../../components/app/dashboard/FilterToolBar";
import ToggleButton from "../../../components/app/dashboard/ToggleButton";
import { useState } from "react";
import LandLoad from "../../../components/app/dashboard/LandLoad";
import Tenant from "../../../components/app/dashboard/Tenant";

export default function Dashboard() {   
    const [activeTab, setActiveTab] = useState("landlords");
    return (
        <div>
         <DashboardBar />
         <DashboardStats />
         <div className=" w-full h-full  flex items-center justify-center gap-4">
         <DashboardBarChart  />
         <TotalStats />
         </div>
         <div className=" bg-white p-4 my-4 rounded-[8px]">
            <FilterToolBar/>
            <ToggleButton activeTab={activeTab} setActiveTab={setActiveTab}/>
         {activeTab === "landlords" ? <LandLoad /> : <Tenant />}
         </div>
        </div>
    );
}