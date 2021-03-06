1//导入express
const express =require("express")
const path = require('path')

2//创建对象
const accountRouter =express.Router()

//导入控制器
const  accountCTRL=require(path.join(__dirname,"../controllers/accountCtrl.js"))



//3.处理具体的请求
//登录页面的请求
accountRouter.get('/login',accountCTRL.getLoginPage)
//3.处理具体的请求
//注册页面的请求
accountRouter.get('/register',accountCTRL.getRegisterPage)

//处理注册的请求
accountRouter.post('/register',accountCTRL.register)



// 获取图片验证码
accountRouter.get('/vcode',accountCTRL.getVcodeImage)

// 处理登录
accountRouter.post('/login',accountCTRL.login)

//导出
accountRouter.get('/logout',accountCTRL.logout)
module.exports =accountRouter


