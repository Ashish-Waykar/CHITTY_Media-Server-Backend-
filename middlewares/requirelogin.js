const jwt = require('jsonwebtoken')
const mongoose= require('mongoose')
const user = mongoose.model("User")

const JWT_SECRET_KEY="ashishwaykar"

module.exports=(req,res,next)=>{
    const {authorization} = req.headers
    if (!authorization){
        return res.status(401).json({error:"Login to continue"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,JWT_SECRET_KEY,(err,payload)=>{
        if (err){
            return res.status(402).json({error:"Login To Continue"})
        }
        const {_id}=payload
        user.findById(_id).then(userdata=>{
            req.user=userdata
        }).catch(err=>{console.log(err)})
        next()
    })
}