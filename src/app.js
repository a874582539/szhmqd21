//开启web服务

const express =require("express")

const path  = require('path')
const app =express()
var bodyParser = require('body-parser')
const session = require('express-session')

app.use(session({resave:false,saveUninitialized:true, secret: 'keyboard cat', cookie: { maxAge: 600000 }}))
app.use(bodyParser.urlencoded({ extended: false }))
//all 是代表支持GET/POST方法，这个all方法要写在集成路由之前
app.all('/*',(req,res,next)=>{
    if(req.url.includes('account')){
        next()
    }else{
        if(req.session.loginedName){
            next()
        } else{
            res.send(`<script>alert("您还没有登录,请先登录");location.href="/account/login"</script>`)
        }
    }

})


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
