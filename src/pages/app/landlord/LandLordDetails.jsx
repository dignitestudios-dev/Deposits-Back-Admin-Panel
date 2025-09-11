import { useEffect, useState } from "react";
import BackBar from "../../../components/app/landload/BackBar";
import Filter from "../../../components/app/landload/Filter";
import HeaderDetail from "../../../components/app/landload/HeaderDetail";
import LandLordContact from "../../../components/app/landload/LandLordContact";
import PropertieList from "../../../components/app/landload/PropertieList";
import { useParams } from "react-router";
import axios from "../../../axios";
import Skeleton from "../../../components/app/dashboard/Skeleton";
import { SuccessToast } from "../../../components/global/Toaster";
export default function LandLordDetails() {
  const {id} = useParams()
  const [loading,setloading]=useState(false)
  const [landlordDetails,setLandlordDetails]=useState({})
  const [type,setType]=useState("House")
  const [search,setSearch]=useState("")
  const [rentStatus,setRentStatus]=useState("Paid")
  const [landlordproperties,setLandlordproperties]=useState([])
  const [isOpen, setIsOpen] = useState(false);
  const getLandlordDetails=async()=>{
    try {
      setloading(true)
      const response=await axios.get(`/admin/landlord/${id}?page=1&limit=10`)
      setLandlordDetails(response?.data?.data)
      setloading(false)
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }
  const getLandlordProperties=async()=>{
    try {
      setloading(true)
      const response=await axios.get(`/admin/landlord/${id}/properties?rentStatus=${rentStatus}&type=${type}&search=${search}&page=1&limit=10`)
      setLandlordproperties(response?.data?.data?.properties)
     
      setloading(false)
    } catch (error) {
      console.log(error)
      setloading(false)
            }
  }
  const blockLandlord=async(reason , setDesc)=>{
    try {
      setloading(true)
      const response=await axios.post(`/admin/block/${id}`,{
        isBlocked:true,
        reason:reason,
        type:"landlord"
      })
      if (response?.data?.success) {
        SuccessToast("Landlord blocked successfully")
        setloading(false)
        setIsOpen(false)
        setDesc("")
      }
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }
  useEffect(() => {
    getLandlordDetails()
    getLandlordProperties()
  }, [id,type,rentStatus,search])
  console.log(landlordproperties,"landlordproperties")
  return (
    <div className="space-y-4">
      <BackBar />
      <HeaderDetail landlord={landlordDetails} blockLandlord={blockLandlord} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className="w-full flex gap-4">
        <div className="w-full h-full space-y-4 bg-white rounded-[10px] p-4">
          <Filter setType={setType} type={type} setRentStatus={setRentStatus} setSearch={setSearch} rentStatus={rentStatus}/>
          {loading ? <Skeleton /> : landlordproperties.length === 0 ? <p className="text-center py-10">No properties found</p> : <PropertieList properties={landlordproperties}/>
          }
        </div>
        <div className="w-[55%]     h-full bg-white rounded-[10px] p-4">
          <LandLordContact landlord={landlordDetails} />
        </div>
      </div>
    </div>
  );
}
