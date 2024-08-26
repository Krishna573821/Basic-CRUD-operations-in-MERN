import mongoose from "mongoose";
export const db = async () =>{
    try {
        await mongoose.connect("mongodb+srv://krishna573821:bluewhale@learningcrud.x5fej.mongodb.net/?retryWrites=true&w=majority&appName=learningcrud")

        console.log("mongoDB connected successfully");
        
    } catch (error) {
        console.log(error.message);
    }
}