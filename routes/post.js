const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post = mongoose.model('Post')
const requirelogin = require('../middlewares/requirelogin')

router.post('/createpost',requirelogin,(req,res)=>{
    const { title,body }= req.body
    if(!title || !body){
        return res.status(422).json({error:"Please all the fields"})
    }
    // console.log(req.user)
    // res.send("ok")
    req.user.password=undefined
    req.user.__v=undefined

    const post = new Post({
        title: title,
        body: body,
        postedBy:req.user        
    })
    post.save()
    .then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err);
    })
})
module.exports= router 