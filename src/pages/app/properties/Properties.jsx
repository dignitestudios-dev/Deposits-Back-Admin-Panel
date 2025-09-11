
import { useEffect, useState } from "react";
import Filter from "../../../components/app/properties/Filter";
import PropertiesList from "../../../components/app/properties/PropertiesList";
import axios from "../../../axios";
import Skeleton from "../../../components/app/dashboard/Skeleton";
export default function Properties() {
    const [type,setType]=useState("Occupied")
    const [rentStatus,setRentStatus]=useState("Unpaid")
    const [loading,setloading]=useState(false)
    const [properties,setProperties]=useState([])
    const [pagination,setPagination]=useState({})
    const [search,setSearch]=useState("")
    const [page,setPage]=useState(1)
    const getProperties = async()=>{
        try {
          setloading(true)
          const response=await axios.get(`/admin/property/?page=${page}&limit=10&rentStatus=${rentStatus}&search=${search}&status=${type}`)
          setProperties(response?.data?.data)
         
          setPagination(response?.data?.pagination)
          setloading(false)
        } catch (error) {
          console.log(error)
          setloading(false)
                }
      }

      useEffect(() => {
        getProperties()
      }, [page,search,type,rentStatus   ])
      console.log(properties,"properties")
    return (
        <div className=" bg-white rounded-[10px] p-6 space-y-6">
            <Filter type={type} setType={setType} status={rentStatus} setStatus={setRentStatus} setSearch={setSearch}/>
            {loading ? <Skeleton /> : <PropertiesList properties={properties} pagination={pagination} setPage={setPage}/>}
        </div>
    );
}