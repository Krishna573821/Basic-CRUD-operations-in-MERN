import mongoose from "mongoose";
const URL = process.env.MONGOURL;

export const db = async()=>{
   await mongoose.connect(URL).then(()=>{
    console.log("mongoDB connected successfully")
   }).catch((error)=>{
    console.log("Error connecting to database: ", error.message);
    
   })
}