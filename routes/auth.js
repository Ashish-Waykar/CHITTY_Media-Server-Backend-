const express = require('express')
const router=express.Router()

router.get('/',(req,res)=>{
     res.send("new route is done");
})

router.post('/signup',(req,res)=>{
    const { name , email , pass}=req.body
    if(!email || !name || !pass){
        return res.status(422).json({error:"Fill complete form"});   
    }
    res.json({message:"new route about is done"})
})
module.exports = router