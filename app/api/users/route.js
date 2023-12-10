import { userModel } from "@/model/users";
import { NextResponse } from "next/server"


export const POST = async (req) => {
    try {
        const body = await req.json()
        await userModel.create({
            name: body.name,
            email:body.email,
            password:body.password
        });
        return NextResponse.json({message:"Successfully Created"})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong", error: JSON.stringify(error)})
    }
}

export const DELETE = async (req) => {
    try {
        const body = await req.json()
        await userModel.deleteOne({ _id: body._id});
        return NextResponse.json({message:"Successfully Deleted"})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong", error: JSON.stringify(error)})
    }
}

export const PUT = async (req) => {
    try {
        const body = await req.json()
        await userModel.updateOne({ _id: body._id}, {name:body.name, email:body.email, password:body.password});
        return NextResponse.json({message:"Successfully Updated"})
    } catch (error) {
        return NextResponse.json({message:"Something went wrong", error: JSON.stringify(error)})
    }
}
