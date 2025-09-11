import Filter from "../../../components/app/tenant/Filter";
import TenantLists from "../../../components/app/tenant/TenantList";
import { useEffect, useState } from "react";
import axios from "../../../axios";
import Skeleton from "../../../components/app/dashboard/Skeleton";


export default function Tenant() {
    const [loading,setloading]=useState(false)
    const [tenant,setTenant]=useState([])
    const [pagination,setPagination]=useState({})
    const [filter,setFilter]=useState({})
    const [search,setSearch]=useState("")
    const [page,setPage]=useState(1)
    const getTenant = async()=>{
        try {
          setloading(true)
          const response=await axios.get(`/admin/tenant?page=${page}&limit=10&search=${search}&sortBy=${filter}`)
          setTenant(response?.data?.data)
         
          setPagination(response?.data?.pagination)
          setloading(false)
        } catch (error) {
          console.log(error)
          setloading(false)
                }
      }

      useEffect(() => {
        getTenant()
      }, [filter,page,search])
console.log(tenant,"tenant")
    return (
        <div className="bg-white rounded-[10px] p-6 space-y-6">
            <Filter name="Tenant" setSearch={setSearch} filter={filter} setFilter={setFilter}/>
            {loading ? <Skeleton /> : <TenantLists data={tenant} pagination={pagination} setPage={setPage}/>}
        </div>
    );
}