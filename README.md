# CHITTY_Media-Server-Backend-
CHITTY_Media is social media app which is written in Nodejs &amp; express . these app is strongly based on mongo DB on local storage. 
 
 
 
 #to start project 
## npm init 
## npm install express
' To start the app.js '
## npm app.js

' middlewares'

'''javascript
//middlewares in react
const customMiddleware= (req,res,next)=>{
    console.log("Middleware is Executed ")
    // to stop or switch to next middleware use 3 arguments req,res,next as perameter for middleware  
    next()
}
app.use(customMiddleware)

// special middleware for about page route
const specialMiddleware=(req,res,next)=>{
    console.log("special middlewaer");
    next()
}
// applying special middleware these midleware will specially run for about page route 
app.get('/about',specialMiddleware,(req,res)=>{
    res.send("about page");
})
'''


#use nodemon
## npm install nodemon
## nodemon app.js or nodemon app

" to use the mongoose for use  the Mongo db "
## npm install mongoose
