const express = require('express')
const router=express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User') 
const bcrypt= require('bcryptjs')
router.get('/',(req,res)=>{
     res.send("new route is done");
})

router.post('/signup',(req,res)=>{
    const { name , email , pass}=req.body
    if(!email || !name || !pass){
        return res.status(422).json({error:"Fill complete form"});   
    }
    // res.json({message:"new route about is done"})
    User.findOne({email:email})
    .then((saveUser)=>{
        if(saveUser){
            return res.json({message:"User already exists"})
        }
        bcrypt.hash(pass,12) // bigger integer you pass perameter more secure password will be recived 
        .then(hashedPassword=>{
            const user = new User({
                email:email,password:hashedPassword,name:name
            })
            user.save()
            .then(user=>{
                res.json({message:"User Saved Successfully "})
            }).catch(err=>{
                console.log(err)
            })
    
        })
        
    }).catch(err=>{console.log(err)})
})
module.exports = router