import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    userName: String,
    email: String,
})

export const User = mongoose.model("User", userSchema)