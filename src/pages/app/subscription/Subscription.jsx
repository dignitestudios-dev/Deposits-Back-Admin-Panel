import { useEffect, useState } from "react";
import SubscriptionFilter from "../../../components/app/subscription/SubscriptionFilter";
import SubscriptionList from "../../../components/app/subscription/SubscriptionList";
import axios from "../../../axios";
import Skeleton from "../../../components/app/dashboard/Skeleton";
export default function Subscription() {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("active");
    const [pagination,setPagination]=useState({})
    const [page,setPage]=useState(1)  
    const getSubscription = async()=>{
        try {
          setLoading(true)
          const response=await axios.get(`/admin/getSubscriptions?page=${page}&limit=10&status=${status}`)
          setSubscriptions(response?.data?.data)
          setPagination(response?.data?.pagination)
          setLoading(false)
        } catch (error) {
          console.log(error)
          setLoading(false)
                }
      }
      useEffect(() => {
        getSubscription()
      }, [page])
    
      console.log(subscriptions,"subscriptions")
    return (
        <div className="bg-white rounded-[10px] p-6 space-y-6">
            <SubscriptionFilter setStatus={setStatus} status={status}/>
            {loading ? <Skeleton /> : <SubscriptionList pageNo={page} subscriptions={subscriptions} pagination={pagination} setPage={setPage}/>}
            
        </div>
    );
}