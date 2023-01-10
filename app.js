const express =require('express')
const app=express()
const PORT =7000


//declering the middleware 
const customMiddleware =(req,res,next)=>{
    console.log("this is middleware")
    next()
}
//applying the middleware to every route
app.use(customMiddleware)
// creating specified middleware
const specialMiddleware=(req,res,next)=>{
    console.log("specified middleware ");
    next()
}
// while using these routspecial middleware do npot use app.use(middleware_name)

//managing the routes for app 
app.get('/',(req,res)=>{
    console.log("main page ")
    res.send("Hello World")
})
// using rout special middleware 
app.get('/about',specialMiddleware,(req,res)=>{
    console.log("about page ")
    res.send("About page")
})
app.listen(PORT,()=>{
    console.log("Server Is Running On localhost:",PORT)
})