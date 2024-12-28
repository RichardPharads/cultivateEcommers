import express from "express";
import dotenv from "dotenv";
import { connectDB  } from "./config/db.js";

import productRouter from './Router/react.rounter.js'


dotenv.config()
const app = express()

app.use(express.json())

app.use('/api/products', productRouter)

app.listen(5000, ()=>{

    connectDB()
    console.log("Server is Running")
})

