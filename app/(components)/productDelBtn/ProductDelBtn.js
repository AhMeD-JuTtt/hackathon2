"use client"

export default function ProductDeleteButton(props) {

    const deleteHandler = async () => {
        await fetch("http://localhost:3000/api/products", {method: "DELETE", headers: {"Content-Type": "application/json"}, body:JSON.stringify({_id:props.id})})
        alert("Product Deleted")
        // console.log("id", props.id)
    }

  return (
    <button onClick={deleteHandler} className="btn btn-danger btn-lg" style={{marginRight:"50px"}}>Delete</button>
  )
}
