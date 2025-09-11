import CreateNotification from "../../../components/app/notification/CreateNotification";
import NotificationBar from "../../../components/app/notification/NotificationBar";
import NotificationFilter from "../../../components/app/notification/NotificationFilter";
import { useEffect, useState } from "react";
import NotificationList from "../../../components/app/notification/NotificationList";
import DeleteModal from "../../../components/app/notification/DeleteModal";
import axios from "../../../axios";
import Skeleton from "../../../components/app/dashboard/Skeleton";
import NotificationListSkeleton from "../../../components/app/notification/NotificationListSkeleton";
export default function PushNotification() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [Notification ,setNotification] = useState ([])
    const [loading ,setLoading] =useState (false)
    const [search ,setSearch] =useState ("")
    const [page,setPage]=useState(1)
    const [pagination,setPagination]=useState({})
    const getNotificationList=async()=>{
        try {
          setLoading(true)
          const response=await axios.get(`/admin/notifications?page=${page}&limit=10&search=${search}`)
          setNotification(response?.data?.data)
          setPagination(response?.data?.pagination)
        } catch (error) {
          console.log(error)
        }finally{
          setLoading(false)
        }
      }
     
      useEffect(() => {
        getNotificationList()
      }, [search,page])
    return (
        <div>
            <NotificationBar modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
            <div className="bg-white rounded-[10px] p-6 space-y-6">
         <NotificationFilter setSearch={setSearch}/>
         {loading ? <NotificationListSkeleton /> : <NotificationList Notification={Notification} deleteModalIsOpen={deleteModalIsOpen} setDeleteModalIsOpen={setDeleteModalIsOpen} pagination={pagination} setPage={setPage} getNotificationList={getNotificationList}/>}
         </div>
         <CreateNotification isOpen={modalIsOpen} onClose={setModalIsOpen} getNotificationList={getNotificationList} />
         {/* <DeleteModal isOpen={deleteModalIsOpen} onClose={setDeleteModalIsOpen} onDelete={deleteNotification}/> */}
        </div>
    );
}