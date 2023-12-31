import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema({

    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true }

})

export const productModel = mongoose.models?.products || mongoose.model("products", ProductSchema)