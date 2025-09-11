import LandLordList from "../../../components/app/landload/LandLordList";
import Filter from "../../../components/app/tenant/Filter";
import { useEffect, useState } from "react";
import axios from "../../../axios";
import Skeleton from "../../../components/app/dashboard/Skeleton";
export default function Landlord() {
    const [filter,setFilter]=useState({})
    const [loading,setloading]=useState(false)
    const [landlord,setLandlord]=useState([])
    const [pagination,setPagination]=useState({})
    const [search,setSearch]=useState("")
    const [page,setPage]=useState(1)
    const getLandlord = async()=>{
        try {
          setloading(true)
          const response=await axios.get(`/admin/landlord?page=${page}&limit=10&search=${search}&sortBy=${filter}`)
          setLandlord(response?.data?.data)
         
          setPagination(response?.data?.pagination)
          setloading(false)
        } catch (error) {
          console.log(error)
          setloading(false)
                }
      }

      useEffect(() => {
        getLandlord()
      }, [filter,page,search])
    return (
        <div className="bg-white rounded-[10px] p-6 space-y-6">
            <Filter name="Landlord" setFilter={setFilter} filter={filter} setSearch={setSearch}/>
            {loading ? <Skeleton /> : <LandLordList data={landlord} pagination={pagination} setPage={setPage}/>}
        </div>
    );
}