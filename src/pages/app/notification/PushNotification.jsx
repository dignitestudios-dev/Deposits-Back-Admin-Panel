import CreateNotification from "../../../components/app/notification/CreateNotification";
import NotificationBar from "../../../components/app/notification/NotificationBar";
import NotificationFilter from "../../../components/app/notification/NotificationFilter";
import { useState } from "react";
import NotificationList from "../../../components/app/notification/NotificationList";
import DeleteModal from "../../../components/app/notification/DeleteModal";

export default function PushNotification() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    
    
    return (
        <div>
            <NotificationBar modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
            <div className="bg-white rounded-[10px] p-6 space-y-6">
         <NotificationFilter/>
         <NotificationList deleteModalIsOpen={deleteModalIsOpen} setDeleteModalIsOpen={setDeleteModalIsOpen}/>
         </div>
         <CreateNotification isOpen={modalIsOpen} onClose={setModalIsOpen} /> 
         <DeleteModal isOpen={deleteModalIsOpen} onClose={setDeleteModalIsOpen} />
        </div>
    );
}