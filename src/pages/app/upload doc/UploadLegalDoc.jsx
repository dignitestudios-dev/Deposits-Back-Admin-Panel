import UploadDocList from "../../../components/app/upload doc/UploadDocList";
import UploadDocBar from "../../../components/app/upload doc/UploadDocBar";
import UploadDropDown from "../../../components/app/upload doc/UploadDropDown";
import { useEffect, useState } from "react";
import axios from "../../../axios";
import SkeletonDoc from "../../../components/app/upload doc/SkeletonDoc";
export default function UploadLegalDoc() {
    const [dropDownModal, setDropDownModal] = useState(false);
    const [documentList, setDocumentList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNo,setPageNo]=useState(1)
    const [pagination,setPagination]=useState({})
    const [categories,setCategories]=useState([])
    const getDocumentList = async()=>{
        try {
            setLoading(true)
            const response=await axios.get(`/admin/getLegalDocs?page=${pageNo}`)
            setDocumentList(response?.data?.data)
            setPagination(response?.data?.pagination)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }   
    const getCategories = async()=>{
        try {
            const response=await axios.get(`/laws/category`)
            console.log(response.data,"response");
            
            setCategories(response?.data?.data)
        } catch (error) {
            console.log(error)
        }
    } 
    useEffect(() => {
        getDocumentList()
        getCategories()
    }, [pageNo])
    console.log(categories,"39 categories");
    
    return (
        <div className="">
            <UploadDocBar setDropDownModal={setDropDownModal}/>
            <div className="bg-white rounded-[10px] p-6 space-y-6">
                {loading ? <SkeletonDoc /> : <UploadDocList documentList={documentList} getDocumentList={getDocumentList} pagination={pagination} setPageNo={setPageNo}/>}
            {dropDownModal && <UploadDropDown isOpen={dropDownModal} onClose={() => setDropDownModal(false)} categories={categories} getDocumentList={getDocumentList} setCategories={setDocumentList} getCategories={getCategories}/>}
            
            </div>
        </div>
    );
}