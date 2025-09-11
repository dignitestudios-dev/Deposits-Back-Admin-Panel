import BlockDeletedModal from "../../../components/app/block/BlockDeletedModal";
import BlockFilter from "../../../components/app/block/BlockFilter";
import BlockList from "../../../components/app/block/BlockList";
import { useState } from "react";
import axios from "../../../axios";
import { useEffect } from "react";
import { SuccessToast } from "../../../components/global/Toaster";

export default function Block() {
    const [block , setBlock] = useState([]);
    const [pagination, setPagination] = useState({});
    const [type, setType] = useState("landlord");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [loading,setloading]=useState(false)
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const getUsers=async()=>{
        try {
          setloading(true)
          const response=await axios.get(`/admin/block?page=${page}&limit=10&type=${type}`)
          setBlock(response?.data?.data)
          setPagination(response?.data?.pagination)
          setloading(false)
        } catch (error) {
          console.log(error)
          setloading(false)
                }
      }
      const unblock=async(id , type)=>{
        try {
          setloading(true)
          const response=await axios.post(`/admin/block/${id}`,{
            isBlocked:false,
            type:type
          })
          if (response?.data?.success) {
            SuccessToast(`${type} unblocked successfully`)
            setloading(false)
            setDeleteModalIsOpen(false)
            getUsers()
          }
        } catch (error) {
          console.log(error)
          setloading(false)
        }
      }
      useEffect(() => {
        getUsers()
      }, [type,page,search])
    return (
        <div className="bg-white rounded-[10px] p-6 space-y-6">
            <BlockFilter setSearch={setSearch}/>
            <BlockList blockUser={block} pagination={pagination} setPage={setPage} setType={setType} deleteModalIsOpen={deleteModalIsOpen} setDeleteModalIsOpen={setDeleteModalIsOpen} unblock={unblock}/>
          
        </div>
    );
}