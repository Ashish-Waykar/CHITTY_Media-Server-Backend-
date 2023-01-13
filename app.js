const express =require('express')
const app=express()
const mongoose = require('mongoose')
const PORT =7000
const dbport= 7001
const dbURL="mongodb://localhost:27017/socialmedia_"  

//getting the embading the model

//declering the middleware 
// const customMiddleware =(req,res,next)=>{
//     console.log("this is middleware")
//     next()
// }
//applying the middleware to every route
// app.use(customMiddleware)
// creating specified middleware
// const specialMiddleware=(req,res,next)=>{
//     console.log("specified middleware ");
//     next()
// }
// while using these routspecial middleware do npot use app.use(middleware_name)

//managing the routes for app 
// app.get('/',(req,res)=>{
//     console.log("main page ")
//     res.send("Hello World")
// })
// // using rout special middleware 
// app.get('/about',specialMiddleware,(req,res)=>{
//     console.log("about page ")
//     res.send("About page")
// })

// connect the database on local machine  

mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true},)
.then(()=>app.listen(dbport,()=>
console.log('Listning On : ',dbport),),)
.catch((error)=> console.log(error));


app.listen(PORT,()=>{
    console.log("Server Is Running On localhost:",PORT)
})

require('./models/user')
require('./models/post')
app.use(express.json())
require('./models/user')
app.use(require('./routes/auth'))
app.use(require('./routes/post'))