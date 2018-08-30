//开启web服务

const express =require("express")

const path  = require('path')
const app =express()
var bodyParser = require('body-parser')
const session = require('express-session')

app.use(session({resave:false,saveUninitialized:true, secret: 'keyboard cat', cookie: { maxAge: 600000 }}))
app.use(bodyParser.urlencoded({ extended: false }))
const accountRouter=require(path.join(__dirname,"./routers/accountRouter.js"))



const studentManagerRouter = require(path.join(__dirname,"./routers/studentmanagerRouter.js"))

app.use("/account",accountRouter)
app.use('/studentmanager',studentManagerRouter)
app.listen(3000,'127.0.0.1',err=>{
    if(err){
        console.log(err);
        
    }

    console.log("OK");
    
})
