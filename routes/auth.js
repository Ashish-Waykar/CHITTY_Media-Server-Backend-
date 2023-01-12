const express = require('express')
const router=express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User') 
const bcrypt= require('bcryptjs')
const jwt =require('jsonwebtoken')
const requirelogin=require('../middlewares/requirelogin')
//secured item
const JWT_SECRET_KEY= "ashishwaykar"

//Homepage Route
router.get('/',(req,res)=>{
     res.send("new route is done");
})
//Signup Rout
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
//Signin Route
router.post('/signin',(req,res)=>{
    const {email,pass}=req.body
    if(!email || !pass){
        return res.status(422).json({error:"Invalid Email or Password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid Email or Password"})
        }
        bcrypt.compare(pass,savedUser.password)
        .then(doMatch=>{
                    if(doMatch){
                        // return res.json({message:"Successfully Signed In"})
                        const token= jwt.sign({_id:savedUser._id},JWT_SECRET_KEY)
                        res.json({token})
                        
                    }else{
                        return res.status(422).json({error:"Invalid Email Or Password"})
                    }
                    }
                ).catch(err=>{
                    console.log(err)
                })
            }
        ).catch(err=>{
            console.log(err)
        })
})
router.post('/protected',requirelogin,(req,res)=>{
    res.send("hello world")
})
module.exports = router