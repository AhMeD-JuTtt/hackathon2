"use client"

import { useState } from "react"
import Link from "next/link"

const initialValues = {
    name: "",
    price:0,
    description:""
}

export default function CreateProduct() {

    const [values, setValues] = useState(initialValues)

    const changeHandler = (e) => {
        e.preventDefault()
        setValues({...values, [e.target.name]: e.target.value})
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        await fetch("http://localhost:3000/api/products", {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body:JSON.stringify({
                name:values.name,
                price:values.price,
                description:values.description
            })})
        alert("Product Created!")
        setValues(initialValues)
    }

    return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"98vh"}}>
        <form style={{display:"flex", height:"25vh", flexDirection:"column", justifyContent:"space-between"}}>
            <Link href="/productsPage" className="btn btn-info">Products</Link>
            <input className="form-control" type="text" name="name" placeholder="Name" required onChange={changeHandler} value={values.name}/>
            <input className="form-control" type="number" name="price" placeholder="Price" required onChange={changeHandler} value={values.price}/>
            <input className="form-control" type="text" name="description" placeholder="Description" required onChange={changeHandler} value={values.description}/>
            <button onClick={submitHandler} className="btn btn-success">Create Product</button>
        </form>
    </div>
  )
}
