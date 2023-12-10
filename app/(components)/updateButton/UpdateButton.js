"use client"

export default function UpdateButton(props) {

    const updateHandler = async () => {
        // await fetch("http://localhost:3000/api/users", {method: "PUT", headers: {"Content-Type": "application/json"}, body:JSON.stringify({_id:props.id})})
        // console.log("id", props.id)
    }

  return (
    <button onClick={updateHandler} className="btn btn-primary btn-lg" style={{marginRight:"50px"}}>Update</button>
  )
}
