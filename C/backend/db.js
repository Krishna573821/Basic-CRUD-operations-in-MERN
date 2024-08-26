import mongoose from "mongoose";

const URL = process.env.MONGOURL
export const db = async () =>{
    try {
        await mongoose.connect(URL)

        console.log("mongoDB connected successfully");
        
    } catch (error) {
        console.log(error.message);
    }
}