import "dotenv/config"
import express from "express";
import {db} from "./db.js";
import { User } from "./models/user.model.js";



const app = express();
const PORT = process.env.PORT;

db();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Hello From Backend");
})

app.post("/api/createUser",async (req,res)=>{
    
    const newUser = {
        userName :  req.body.name,
        email : req.body.email,
        password : req.body.password     
    };
    let createdUser = await User.create(newUser).then(()=>{
        console.log("User Created Successfully");
        res.send("User Created")
    }).catch((error)=>{
        console.log("!!!Error!!!",error.message);
    })
    console.log(createdUser);
})


app.listen(PORT,()=>{
    console.log(`App is listening on the port ${PORT}`);
    
})