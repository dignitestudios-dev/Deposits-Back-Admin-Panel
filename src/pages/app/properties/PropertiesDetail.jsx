import BackBar from "../../../components/app/properties/BackBar";
import About from "../../../components/app/properties/About";
import RentHistory from "../../../components/app/properties/RentHistory";
import Reviews from "../../../components/app/properties/Reviews";
import TenantAgreements from "../../../components/app/properties/TenantAgreements";
import LandlordAgreements from "../../../components/app/properties/LandLordAgreementS";
import LandLordRules from "../../../components/app/properties/LandLordRules";
import { useParams } from "react-router";
import { useEffect } from "react";
import axios from "../../../axios";
import { useState } from "react";
import { CiGlass } from "react-icons/ci";
import { SuccessToast } from "../../../components/global/Toaster";
export default function PropertiesDetail() {
    const {id} = useParams()
    const [property,setProperty]=useState({})
    const [loading,setLoading]=useState(false)
    const [reviews ,setReviews ] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const getproperty=async()=>{
        try {
            setLoading(true)
            const response=await axios.get(`/admin/property/${id}`)
            setProperty(response?.data?.data.property)
            setReviews(response?.data?.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    const blockProperty=async(reason ,setDesc)=>{
        try {
          setLoading(true)
          const response=await axios.post(`/admin/block/${id}`,{
            isBlocked:true,
            reason:reason,
            type:"property"
          })
          if (response?.data?.success) {
            SuccessToast("Property blocked successfully")
            setLoading(false)
            setIsOpen(false)
            getproperty()
            setDesc("")
          }
        } catch (error) {
          console.log(error)
          setLoading(false)
        }
      }
      const unblockProperty=async(id , type)=>{
        try {
          setLoading(true)
          const response=await axios.post(`/admin/block/${id}`,{
            isBlocked:false,
            type:"property"
          })
          if (response?.data?.success) {
            SuccessToast(`${type} unblocked successfully`)
            setLoading(false)
            setIsOpen(false)
            getproperty()
            setDeleteModalIsOpen(false)
          }
        } catch (error) {
          console.log(error)
          setLoading(false)
        }
      }
      
    useEffect(() => {
        getproperty()
    }, [id])
    console.log(reviews,"reviews")
    return (
        <div>
            <BackBar/>
            <div className="flex gap-4 ">
            <div className="w-[80%]">
            <About property={property} blockProperty={blockProperty} isOpen={isOpen} setIsOpen={setIsOpen} unblockProperty={unblockProperty} deleteModalIsOpen={deleteModalIsOpen} setDeleteModalIsOpen={setDeleteModalIsOpen}/>
            <RentHistory/>
            </div>
            <div className="w-[40%] pt-4">
                <Reviews reviews={reviews}/>
                {property?.tenant && <TenantAgreements property={property} />}
               
               {property?.landlord && <LandlordAgreements property={property}/>}
               {property?.tempLandlord &&<LandLordRules property={property}/>}
            </div>
            </div>
        </div>
    );
}