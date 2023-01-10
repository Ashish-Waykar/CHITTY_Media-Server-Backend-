const express = require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send("new route is done");
})

router.get('/about',(req,res)=>{
    res.send("new route about is done");
})
module.exports = router