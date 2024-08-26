import mongoose from "mongoose";
const URL = process.env.MONGOURL;

export const db = async()=>{
    try {
        await mongoose.connect(URL).then(()=>{
            console.log("mongoDB connected successfully");
            
        }).catch((error)=>{
            console.log("Some error occured while connecting to mongoDB: ", error.message);
            
        })

    } catch (error) {
        console.error(error.message);
        
    }
} 