"use client"
import { useState } from "react"
import ProductModal from "../productModal/productModal";

export default function ProductModalToggler(props) {
    // console.log(props.data)

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
      };

    const closeModal = () => {
        setIsModalOpen(false);
    };

  return (
    <div>
        <button 
            onClick={openModal} 
            // onClick={updateHandler} 
            className="btn btn-primary btn-lg" 
            style={{marginRight:"50px"}}
            >
                Update
            </button>
        {/* <button onClick={() => openModal()}>Update</button> */}
        {/* Render the modal component */}
        <ProductModal
            data={props.data}
            isOpen={isModalOpen}
            onClose={closeModal}
        />
    </div>
    
  )
}
