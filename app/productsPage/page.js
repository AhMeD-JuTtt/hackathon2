import dbConnect from "@/config/db"
import { productModel } from "@/model/products"
import Link from "next/link"
import ProductModalToggler from "../(components)/productModalToggler/ProductModalToggler"
import ProductDeleteButton from "../(components)/productDelBtn/ProductDelBtn"

dbConnect()

const fetchData = async () => {
  try {
    const data = await productModel.find()
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
      {data?.map((item) => {
        return (
          <div>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              {/* <div style={{display:"flex", justifyContent:"space-between" }}> */}
              <div style={{marginLeft:"50px"}}>
                <h1>{item.name}</h1>
                <br/>
                <h2>{item.price}</h2>
                <h2>{item.description}</h2>
              </div>
              <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                {/* <UpdateButton/> */}
                <ProductModalToggler data={{id:item._id, name:item.name, price: item.price, description:item.description}}/>
                <ProductDeleteButton id={item._id}/>
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
