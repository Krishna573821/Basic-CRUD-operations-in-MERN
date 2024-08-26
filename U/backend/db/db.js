import mongoose from "mongoose";
const URL = process.env.MONGOURL

export const db= async ()=>{
    await mongoose.connect(URL).then(()=>{
        console.log("MongoDB connected successfully");
    }).catch((error)=>{
        console.log("Error in connecting to MongoDB", error.message);
    })
}