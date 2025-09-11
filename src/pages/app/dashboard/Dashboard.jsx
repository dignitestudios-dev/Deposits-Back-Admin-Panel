import BarChart from "../../../components/app/dashboard/DashboardBarChart";
import DashboardBar from "../../../components/app/dashboard/DashboardBar";
import DashboardStats from "../../../components/app/dashboard/DashboardStats";
import DashboardBarChart from "../../../components/app/dashboard/DashboardBarChart";
import TotalStats from "../../../components/app/dashboard/TotalStats";

import FilterToolBar from "../../../components/app/dashboard/FilterToolBar";
import ToggleButton from "../../../components/app/dashboard/ToggleButton";
import { useEffect, useState } from "react";
import LandLoad from "../../../components/app/dashboard/LandLoad";
import Tenant from "../../../components/app/dashboard/Tenant";
import axios from "../../../axios";
import Skeleton from "../../../components/app/dashboard/Skeleton";

export default function Dashboard() {   
    const [activeTab, setActiveTab] = useState("landlord");
    const [loading,setloading]=useState(false)
    const [stats, setStats] = useState([]);
    const [pagination, setPagination] = useState({});
    const [filter, setFilter] = useState("7d");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [userdata, setUserdata] = useState([]);
   
    const getUsers=async()=>{
        try {
          setloading(true)
          const response=await axios.get(`/admin/dashboard?filter=${filter}&page=${page}&limit=5&search=${search}&userType=${activeTab}&year=2025`)
          setUserdata(response?.data?.data.revenue.data)
          setStats(response?.data?.data)
          setPagination(response?.data?.revenue?.pagination)
          setloading(false)
        } catch (error) {
          console.log(error)
          setloading(false)
                }
      }
      useEffect(() => {
        getUsers()
      }, [filter,page,activeTab,search])
      
    return (
        <div>
         <DashboardBar setFilter={setFilter}/>
         <DashboardStats stats={stats}/>
         <div className=" w-full h-full  flex items-center justify-center gap-4">
         <DashboardBarChart  />
         <TotalStats stats={stats}/>
         </div>
         <div className=" bg-white p-4 my-4 rounded-[8px]">
            <FilterToolBar/>
            <ToggleButton activeTab={activeTab} setActiveTab={setActiveTab} />
      
         {activeTab === "landlord" ? loading ? <Skeleton /> : <LandLoad data={userdata} pagination={pagination} setPage={setPage} /> : loading ? <Skeleton /> : <Tenant data={userdata} pagination={pagination} setPage={setPage} />}
         </div>
        </div>
    );
}