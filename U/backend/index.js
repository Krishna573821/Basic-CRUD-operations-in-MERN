import "dotenv/config"
import express from "express"
import { db } from "./db/db.js";
import { User } from "./models/change.model.js";

const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended:true}))

db();


app.patch("/api/updateUser", async (req,res)=>{
    console.log(req.body);
    const name = req.body.name
    const newMail = req.body.email

    await User.findOneAndUpdate({userName:name},{email:newMail}).then(()=>{
        console.log("user updated successfully");
        res.send("User Updated")
    }).catch((error)=>{
        console.error("Some error occured while updating: ",error.message);
        
    })
})

app.listen(PORT,()=>{
    console.log(`Express is listening on port ${PORT}`);
})