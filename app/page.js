import dbConnect from "@/config/db"
import { prisma } from "@/config/prisma"
import { userModel } from "@/model/users"
import DeleteButton from "./(components)/deleteButton/DeleteButton"
import Link from "next/link"
import UpdateButton from "./(components)/updateButton/UpdateButton"
import ModalToggler from "./(components)/modalToggler/ModalToggler"

dbConnect()

const fetchData = async () => {
  try {
    const data = await userModel.find()
    // const data = await prisma.profiles.findMany()
    console.log("data", data)
    return data
  } catch (error) {
    console.log("error", error)
  }
}

export default async function Home() {
  const data = await fetchData()
  return (
    <div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Link href="/createUser" className="btn btn-info btn-lg" style={{margin:"50px"}}>Create Users</Link>
        <Link href="/createProduct" className="btn btn-info btn-lg" style={{margin:"50px"}}>Create Products</Link>
        <Link href="/" className="btn btn-info btn-lg" style={{margin:"50px"}}>Users</Link>
        <Link href="/productsPage" className="btn btn-info btn-lg" style={{margin:"50px"}}>Products</Link>
      </div>
      {data?.map((item, i) => {
        return (
          <div key={item._id}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              {/* <div style={{display:"flex", justifyContent:"space-between" }}> */}
              <div style={{marginLeft:"50px"}}>
                <h1>{item.name}</h1>
                <br/>
                <h2>{item.email}</h2>
                <h2>{item.password}</h2>
              </div>
              <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                {/* <UpdateButton/> */}
                <ModalToggler data={{id:item._id, name:item.name, email: item.email, password:item.password}}/>
                <DeleteButton id={item._id}/>
              </div>
            </div>
            <br/>
            <hr/>
            <br/>
          </div>
        )
      })}
    </div>
  )
}
