import 'dotenv/config'
import express from "express"
import { db } from "./db.js";
import { User } from './models/user.model.js';



const app = express()
const PORT =  process.env.PORT || 3000;

db();

app.get("/",(req, res)=> {
    res.send("Hello from Express")
})

app.get("/api/getUsers",async (req, res)=> {

    let users = await User.find()
    console.log(users);
    res.json(users)
})



app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`);
    
})