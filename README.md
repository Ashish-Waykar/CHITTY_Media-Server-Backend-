# CHITTY_Media-Server-Backend-
CHITTY_Media is social media app which is written in Nodejs &amp; express . these app is strongly based on mongo DB on local storage. 
 
 
 
 #to start project 
## npm init 
## npm install express
' To start the app.js '
## npm app.js

' middlewares'

```Javascript
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
```


#use nodemon
## npm install nodemon
## nodemon app.js or nodemon app

` to use the mongoose for use  the Mongo db `
## npm install mongoose


`encrypt the passwords use bcrytpjs dependancy `
## npm install bcryptjs

`for token using JWT Tokens for loged In User `
## npm install jsonwebtoken

#Note: Execute Node Backend As Well With The Project Frontend in react 


` ScreenShoots `
![follow unfollow](https://user-images.githubusercontent.com/81794601/216027888-5936907d-a134-4f85-95c5-0e0e46a82ec1.png)
![line dislike ](https://user-images.githubusercontent.com/81794601/216027902-45ebaacc-b685-444d-96cf-cdf9dccc802c.png)
![Screenshot 2023-01-11 194242](https://user-images.githubusercontent.com/81794601/216027907-d31eebdd-dcea-4cea-b053-92a564780a6a.png)
![Screenshot 2023-01-11 194407](https://user-images.githubusercontent.com/81794601/216027910-304d8aa1-84e1-4e24-ab3f-204f5c319d95.png)
![Screenshot 2023-01-11 194425](https://user-images.githubusercontent.com/81794601/216027914-85aa63f5-8408-4fc2-82a9-65d7285e736d.png)
![Screenshot 2023-01-11 194524](https://user-images.githubusercontent.com/81794601/216027929-383d84a6-1a46-4535-b5a3-215db087dc12.png)
![Screenshot 2023-01-11 194540](https://user-images.githubusercontent.com/81794601/216027931-2f0f8a2e-d840-44f8-b5a4-97beec067349.png)
![Screenshot 2023-01-11 194703](https://user-images.githubusercontent.com/81794601/216027934-cc5e1957-23e3-4131-a461-60f9660f2ce0.png)
![Screenshot 2023-01-11 194734](https://user-images.githubusercontent.com/81794601/216027938-34ca8c16-1dfc-44a4-97d6-505bc7746597.png)
![Screenshot 2023-01-11 194750](https://user-images.githubusercontent.com/81794601/216027950-437defde-0d7c-4f6b-b8d2-e48b2e635651.png)
![Screenshot 2023-01-11 195428](https://user-images.githubusercontent.com/81794601/216027953-1d8a89e2-1d4f-4733-bda8-8b749da28291.png)
![text message post](https://user-images.githubusercontent.com/81794601/216027957-8d47dd22-cf6c-4c2c-a39f-2624dd330d78.png)
