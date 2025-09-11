import { useLocation, useParams } from "react-router";
import BackBar from "../../../components/app/landload/BackBar";
import Filter from "../../../components/app/landload/Filter";
import HeaderDetail from "../../../components/app/tenant/HeaderDetail";
import PropertieList from "../../../components/app/tenant/PropertieList";
import TenantContact from "../../../components/app/tenant/TenantContact";
import { useEffect, useState } from "react";
import axios from "../../../axios";
import Skeleton from "../../../components/app/dashboard/Skeleton";
import { SuccessToast } from "../../../components/global/Toaster";

export default function TenantDetails() {
    const {id} = useParams()
   
    const [loading,setloading]=useState(false)
    const [tenantDetails,setTenantDetails]=useState({})
    const [tenantproperties,setTenantproperties]=useState([])
    const [type,setType]=useState("House")
    const [search,setSearch]=useState("")
    const [rentStatus,setRentStatus]=useState("Paid")
    const [isOpen, setIsOpen] = useState(false);
    const TenantDetails=async()=>{
        try {
          setloading(true)
          const response=await axios.get(`/admin/tenant/${id}`)
          setTenantDetails(response?.data?.data?.user)
         
          setloading(false)
        } catch (error) {
          console.log(error)
          setloading(false)
                }
      }
      const getTenantProperties=async()=>{
        try {
          setloading(true)
          const response=await axios.get(`/admin/tenant/${id}/properties?rentStatus=${rentStatus}&type=${type}&search=${search}&page=1&limit=10`)
          setTenantproperties(response?.data?.data?.properties)
         
          setloading(false)
        } catch (error) {
          console.log(error)
          setloading(false)
                }
      }
      const blockTenant=async(reason ,setDesc)=>{
        try {
          setloading(true)
          const response=await axios.post(`/admin/block/${id}`,{
            isBlocked:true,
            reason:reason,
            type:"tenant"
          })
          if (response?.data?.success) {
            SuccessToast("Tenant blocked successfully")
            setloading(false)
            setIsOpen(false)
            TenantDetails()
            setDesc("")
          }
        } catch (error) {
          console.log(error)
          setloading(false)
        }
      }
      useEffect(() => {
        TenantDetails()
        getTenantProperties()
      
      }, [id,rentStatus,type,search])
     
        return (
        <div className="space-y-4">
            <BackBar/>
            <HeaderDetail tenant={tenantDetails} blockTenant={blockTenant} isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className="w-full flex gap-4">
        <div className="w-full h-full space-y-4 bg-white rounded-[10px] p-4">
            <Filter setType={setType} type={type} setRentStatus={setRentStatus} setSearch={setSearch} rentStatus={rentStatus}/>
            {loading ? <Skeleton /> : tenantproperties.length === 0 ? <p className="text-center py-10">No properties found</p> : <PropertieList properties={tenantproperties}/>}
            </div>
            <div className="w-[55%]     h-full bg-white rounded-[10px] p-4">
            <TenantContact tenant={tenantDetails}/>
            </div>
          </div>
        </div>
    );
}