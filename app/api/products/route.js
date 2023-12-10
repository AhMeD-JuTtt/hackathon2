import { productModel } from "@/model/products";
import { NextResponse } from "next/server"


export const POST = async (req) => {
    try {
        const body = await req.json()
        await productModel.create({
            name: body.name,
            price:body.price,
            description:body.description
        });
        return NextResponse.json({message:"Successfully Created"})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong", error: JSON.stringify(error)})
    }
}

export const DELETE = async (req) => {
    try {
        const body = await req.json()
        await productModel.deleteOne({ _id: body._id});
        return NextResponse.json({message:"Successfully Deleted"})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong", error: JSON.stringify(error)})
    }
}

export const PUT = async (req) => {
    try {
        const body = await req.json()
        await productModel.updateOne({ _id: body._id}, {
                name:body.name, 
                price:body.price, 
                description:body.description});
        return NextResponse.json({message:"Successfully Updated"})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong", error: JSON.stringify(error)})
    }
}
