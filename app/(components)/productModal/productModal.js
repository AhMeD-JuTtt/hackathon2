// UpdateUserModal.js
"use client"
import React, { useState } from 'react';
import Modal from 'react-modal';

// Modal.setAppElement('#__next'); // Make sure to set the app element to avoid accessibility issues

// const Modal1 = ({ isOpen, onClose, props}) => {
const ProductModal = (props) => {

  // const prevValues = props.data

  const [values, setValues] = useState(props.data)

  const changeHandler = (e) => {
      e.preventDefault()
      setValues({...values, [e.target.name]: e.target.value})
  }

  const handleUpdate = async () => {
    // console.log(values)
    await fetch("http://localhost:3000/api/products", {
                method: "PUT", 
                headers: {"Content-Type": "application/json"}, 
                body:JSON.stringify({_id:props.data.id, ...values})})
    props.onClose();
  };
  // console.log(props.data)

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onClose}
      contentLabel="Update Product"
    >
      <div>
      {/* <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}> */}
        <h2>Update User</h2>
        <form style={{display:"flex", height:"25vh", flexDirection:"column", justifyContent:"space-between"}}>
            <input className="form-control" type="text" name="name" placeholder="Name" required onChange={changeHandler} value={values.name}/>
            <input className="form-control" type="number" name="price" placeholder="Price" required onChange={changeHandler} value={values.price}/>
            <input className="form-control" type="text" name="description" placeholder="Description" required onChange={changeHandler} value={values.description}/>
            {/* <button onClick={submitHandler} className="btn btn-success">Create User</button> */}
        </form>

        <button 
          onClick={handleUpdate} 
          className="btn btn-primary btn-lg" 
          style={{margin:"50px"}}
        >
          Update
        </button>

        <button 
          onClick={props.onClose} 
          className="btn btn-primary btn-lg" 
          style={{margin:"50px"}}
        >
          Cancel
        </button>
        {/* <button onClick={handleUpdate}>Update</button>
        <button onClick={props.onClose}>Cancel</button> */}
      </div>
    </Modal>
  );
};

export default ProductModal;
