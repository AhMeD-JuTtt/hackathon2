"use client"

import { useState } from "react"
import Link from "next/link"

const initialValues = {
    name: "",
    email:"",
    password:""
}

export default function CreateUser() {

    const [values, setValues] = useState(initialValues)

    const changeHandler = (e) => {
        e.preventDefault()
        setValues({...values, [e.target.name]: e.target.value})
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        await fetch("http://localhost:3000/api/users", {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body:JSON.stringify({
                name:values.name,
                email:values.email,
                password:values.password,
            })})
        alert("User Created!")
        setValues(initialValues)
    }

    return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"98vh"}}>
        <form style={{display:"flex", height:"25vh", flexDirection:"column", justifyContent:"space-between"}}>
            <Link href="/" className="btn btn-info">Users</Link>
            <input className="form-control" type="text" name="name" placeholder="Name" required onChange={changeHandler} value={values.name}/>
            <input className="form-control" type="email" name="email" placeholder="Email" required onChange={changeHandler} value={values.email}/>
            <input className="form-control" type="password" name="password" placeholder="Password" required onChange={changeHandler} value={values.password}/>
            <button onClick={submitHandler} className="btn btn-success">Create User</button>
        </form>
    </div>
  )
}
