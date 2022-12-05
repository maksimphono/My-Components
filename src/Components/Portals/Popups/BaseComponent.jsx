import {useState} from "react"
import Modal from "./Modal.jsx";

import "./style.css";

export default function (){
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div>
                <button onClick = {() => setModalOpen(st => !st)} className = "btn-1">Open Modal</button>
            </div>

            <Modal open = {modalOpen} closeMe = {() => setModalOpen(false)}>
                Fancy Modal
            </Modal>

            <div className = "btn-2">Other Content</div>
        </>
        

    )
}