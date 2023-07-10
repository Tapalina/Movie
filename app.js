import  mongoose from "mongoose"
const mongoose = require("mongoose")
const url="mongodb://localhost:27017/reviews"
const port =3000;
const app=express()

mongoose.connect(url,{})
.then(result => console.log("database connected"))
.catch(err => console.log(err))

app.get('/',(req,res)=>{
    res.send("<h1>Hello from node.js app</h1>")
})

app.listen(port,()=>{
    console.log("server is running at port"+port)
})




