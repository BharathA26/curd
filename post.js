const express=require("express")
const app=express()
const mongoose=require("mongoose")
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/studentdetails",{
    useNewUrlparser:true,
    useUnifiedTopology:true
},(err)=>{
    if(!err)
    {
        console.log("connect to db")
    }
    else{
        console.log("error")
    }
})

app.listen(3000,()=>{
    console.log("on port 3000")
})