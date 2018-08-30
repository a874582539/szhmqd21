const xtpl =require('xtpl')

const path =require('path')

const databasetool= require(path.join(__dirname,"../tools/databasetool.js"))

exports.getStudentListPage =(req,res)=>{
         const keyword = req.query.keyword ||''
          databasetool.findList("studentInfo",{name:{$regex:keyword}},(err,docs)=>{

            xtpl.renderFile(path.join(__dirname,"../statics/views/list.html",),{
                student:docs,
                keyword
            },function(error,content){
                res.send(content)
            });

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