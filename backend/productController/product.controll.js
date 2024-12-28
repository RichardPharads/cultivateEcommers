import Product from "../models/product.model.js"
import mongoose from "mongoose"

export const getProducts =  async (req,res)=>{
    try {
        const products = await Product.find({})
        res.status(201).json({success: true , data: products})
        console.log(products)
    } catch (error) {
        console.error("Erorr" , error)
    }
}


export const createProducts = async (req,res)=>{
    const product = req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(404).json({message: "Required All Inputs"})
    }
    
    const newProduct = new Product(product)
    try {
        await newProduct.save()
        res.status(200).json({success: true , data: newProduct})
    } catch (error) {
        console.error("Error : " , error)
    }
}

export const updateProducts = async(req,res)=>{
    const {id} = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid){
        return res.status(404).json({message: "Invalid ID"})
    }
    try {
        const newProduct = await Product.findByIdAndUpdate(id,product, {new:true})
        res.status(201).json({success: true , data: newProduct})
        console.log(newProduct)
    } catch (error) {
        console.error('Error: ', error)
    }
}

export const deleteProducts =  async (req,res)=>{
    const {id} = req.params;
    try {
        const deleteProduct = await Product.findByIdAndDelete(id)
        res.status(200).json({message:`SuccessFully Deleted id ${id}`})
        console.log(`deleted ${deleteProduct}`)
    } catch (error) {
        console.error(error)
    }
}