import ProfileCards from "../../../components/app/profile/ProfileCards";
import ProfileFilter from "../../../components/app/profile/ProfileFilter";
import { useEffect, useState } from "react";
import axios from "../../../axios";
export default function ProfileReview() {
const [profile,setProfile]=useState([])
const [loading,setLoading]=useState(false)
const [status, setStatus] = useState("pending");
const [page,setPage]=useState(1)
const [pagination,setPagination]=useState({})
const getProfile=async()=>{
    try {
        setLoading(true)
        const response=await axios.get(`/admin/reviewProfile?page=${page}&limit=16&status=${status}`)
        setProfile(response?.data?.data)
        setPagination(response?.data?.pagination)
        setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
}
console.log(profile,"profile")
useEffect(() => {
    getProfile()
}, [status,page])
    return (
        <div className="space-y-6">
            <ProfileFilter setStatus={setStatus}/>
            <ProfileCards profile={profile} pagination={pagination} setPage={setPage}/>
        </div>
    )
}