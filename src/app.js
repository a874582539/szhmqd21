//开启web服务

const express =require("express")

const path  = require('path')
const app =express()
var bodyParser = require('body-parser')
const accountRouter=require(path.join(__dirname,"./routers/accountRouter.js"))

//中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/account",accountRouter)


app.listen(3000,'127.0.0.1',err=>{
    if(err){
        console.log(err);
        
    }

    console.log("OK");
    
})
