import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
const app = express();
import cors from "cors";

const PORT = process.env.FRONT_URL;

app.use(cors({ origin: process.env.FRONT_URL , credentials:true }));
app.use(express.json());

mongoose.connect(process.env.MOGODB_URL)
.then(()=>{console.log("Database is connected...")})
.catch(()=>{console.log("Error in connecting database...")})

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);
})