const express =require('express')
const app=express()
const PORT =5000
app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.get('/hi',(req,res)=>{
    res.send("Hi World")
})
app.listen(PORT,()=>{
    console.log("Server Is Running On localhost:",PORT)
})