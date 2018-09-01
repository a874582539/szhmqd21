const express = require('express')
const path = require('path')
const studentManagerRouter = express.Router()

// 导入studentManagerController
const studentManagerCTRL = require(path.join(__dirname,"../controllers/studentmanagerController.js"))

// 处理具体请求
//获取学生页面列表
studentManagerRouter.get('/list',studentManagerCTRL.getStudentListPage)

//获取新增页面列表
studentManagerRouter.get('/add',studentManagerCTRL.getAddStudentsPage)

//完成新增错操作
studentManagerRouter.post('/add',studentManagerCTRL.addStudent)
//获取修改页面列表
studentManagerRouter.get('/edit/:studentId',studentManagerCTRL.getEditStudentPage)
//完成修改操作(动态)
studentManagerRouter.post('/edit/:studentId',studentManagerCTRL.editStudent)

//删除一个的操作
studentManagerRouter.get('/delete/:studentId',studentManagerCTRL.deleteStudent)

module.exports = studentManagerRouter