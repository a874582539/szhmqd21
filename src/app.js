//开启web服务

const express =require("express")

const path  = require('path')
const app =express()
var bodyParser = require('body-parser')
const session = require('express-session')
const accountRouter=require(path.join(__dirname,"./routers/accountRouter.js"))

const studentmanagerRouter=require(path.join(__dirname,"./routers/studentmanagerRouter.js"))
//中间件
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 600000 }}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/account",accountRouter)
app.use('/studentmanager',studentManagerRouter)
app.listen(3000,'127.0.0.1',err=>{
    if(err){
        console.log(err);
        
    }

    console.log("OK");
    
})
