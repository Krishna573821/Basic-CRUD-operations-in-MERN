import "dotenv/config"
import express from "express"
import { db } from "./db/db.js"
import { User } from "./models/user.model.js"

const PORT = process.env.PORT

const app =express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
db();


app.delete("/api/deleteUser",async (req,res)=>{
    let name = req.body.name;
    await User.deleteOne({userName:name}).then(()=>{
        console.log("User deleted successfully");
        
        res.send("data deleted")
    }).catch((error)=>{
        console.log("Some error occured while deleting the user", error.message);
    })
})

app.listen(PORT,()=>{
    console.log(`Express is listening on port ${PORT}`);
})
