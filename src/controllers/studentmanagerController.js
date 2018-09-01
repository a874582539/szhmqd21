const xtpl =require('xtpl')

const path =require('path')

const databasetool= require(path.join(__dirname,"../tools/databasetool.js"))
/**
 * 最终处理，返回获取到的学生列表页面
 */
//
exports.getStudentListPage =(req,res)=>{
         const keyword = req.query.keyword ||''
          databasetool.findList("studentInfo",{name:{$regex:keyword}},(err,docs)=>{

            xtpl.renderFile(path.join(__dirname,"../statics/views/list.html",),{
                student:docs,
                keyword,
                loginedName:req.session.loginedName
            },function(error,content){
                res.send(content)
            });

        })
       
     }
/**
 * 最终处理，返回新增学生页面
 */
exports.getAddStudentsPage=(req,res)=>{
    xtpl.renderFile(path.join(__dirname,"../statics/views/add.html",),{
       loginedName:req.session.loginedName
    },function(error,content){
        res.send(content)
    });

}


/*
    最终处理,返回新增操作之后的html

*/
exports.addStudent=(req,res)=>{
    databasetool.insertOne("studentInfo",req.body,(err,reslut)=>{
        if(reslut=null){
            //新增失败
            res.send(`<script>alert("很抱歉,新增失败")</script>`)
        }else{
            //新增成功
            res.send(`<script>location.href="/studentmanager/list"</script>`)
        }
        
    })
}
/**
 * 最终处理，返回修改学生页面(带有查询出来的数据)
 */

exports.getEditStudentPage=(req,res)=>{
    databasetool.findOne("studentInfo",{_id:databasetool.ObjectId(req.params.studentId)},(err,doc)=>{
    
            
        xtpl.renderFile(path.join(__dirname,"../statics/views/edit.html",),{
            student:doc,
            loginedName:req.session.loginedName
           
       
        },function(error,content){
            res.send(content)
        });

    })
}

/**
 * 最终处理，根据id修改学生信息
 */
exports.editStudent=(req,res)=>{
    databasetool.updateOne("studentInfo",{_id:databasetool.ObjectId(req.params.studentId)},req.body,(err,result)=>{
        if(result==null){
             //新增失败
             res.send(`<script>alert("很抱歉,修改失败")</script>`)
        }else{
            //新增成功
            res.send(`<script>location.href="/studentmanager/list"</script>`)
        }
    })
}
exports.deleteStudent =(req,res)=>{
    databasetool.deleteOne("studentInfo",{_id:databasetool.ObjectId(req.params.studentId)},(err,result)=>{
        if(result==null){
            //新增失败
            res.send(`<script>alert("很抱歉,删除失败")</script>`)
       }else{
           //新增成功
           res.send(`<script>location.href="/studentmanager/list"</script>`)
       }
    })
}










//  const xtpl = require('xtpl')
//  const path =require('path')
 
//  const MongoClient = require('mongodb').MongoClient
//  const url = 'mongodb://localhost:27017'
//  const dbName = 'szheqd21';
//  exports.getStudentListPage =(req,res)=>{
//      const keyword = req.query.keyword ||''
//     MongoClient.connect(url,{useNewUrlParser: true },function(err,client) {
//         const db = client.db(dbName);
//         const collection = db.collection('studentInfo');
//         collection.find({name:{$regex:keyword}}).toArray(function(err,docs) {
//             console.log(docs);
            
//             client.close();
            
//             xtpl.renderFile(path.join(__dirname,"../statics/views/list.html",),{
//                 students:docs,
//                 keyword
//             },function(error,content){
//                 res.send(content)
//             });

//         });


//       }); 
   
//  }