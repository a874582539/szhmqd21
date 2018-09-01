const MongoClient = require('mongodb').MongoClient;

const ObjectId =require('mongodb').ObjectId
exports.ObjectId =ObjectId
const url = 'mongodb://localhost:27017';
const dbName = 'szheqd21';
/**
 * 暴露给控制器用的，查询列表的方法
 * @param {*} collectionName 集合名称
 * @param {*} params 参数对象xx
 * @param {*} callback 回调函数
 * 
 */

 
 /**
 * 抽取连接数据库的方法
 */
const connectDb =(collectionName,callback)=>{
    MongoClient.connect(url,{ useNewUrlParser: true },function(err, client) {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

            callback(err,collection,client)
      });
}
 
 exports.findList = (collectionName,params,callback)=>{
    connectDb(collectionName,(err,collection,client)=>{
        collection.find(params).toArray(function(err,docs) {
                     client.close();
                     callback(err,docs) 
                });
    })
  

    // MongoClient.connect(url,{ useNewUrlParser: true },function(err, client) {
    //     const db = client.db(dbName);
    //     const collection = db.collection(collectionName);
    //     collection.find(params).toArray(function(err,docs) {
    //          client.close();
    //          callback(err,docs) 
    //     });
            
    //   });
    

 }
 /**
 * 暴露给控制器用的，查询一个的方法
 * @param {*} collectionName 集合名称
 * @param {*} params 参数对象
 * @param {*} callback 回调函数
 */
exports.findOne = (collectionName,params,callback) => {

    connectDb(collectionName,(err,collection,client)=>{
            // 根据条件查询一个
          collection.findOne(params,(err,doc)=>{
            client.close();
            // 执行 callback 把结果返回给控制器
            callback(err,doc)
         })
    })
  






    // MongoClient.connect(
    //     url,
    //     { useNewUrlParser: true },
    //     function(err, client) {
    //       // 拿到了数据操作的db对象
    //       const db = client.db(dbName);
    
    //       // 拿到集合
    //       const collection = db.collection(collectionName);

    //       // 根据条件查询一个
    //       collection.findOne(params,(err,doc)=>{
    //         client.close();
    //         // 执行 callback 把结果返回给控制器
    //         callback(err,doc)
    //      })
    // })
}
 /**
 * 暴露给控制器用的，新增一个的方法
 * @param {*} collectionName 集合名称
 * @param {*} params 参数对象
 * @param {*} callback 回调函数
 */
exports.insertOne =(collectionName,params,callback)=>{
    connectDb(collectionName,(err,collection,client)=>{
       
           collection.insertOne(params,(err,result)=>{
                 client.close();
                // 执行 callback 把结果返回给控制器
                 callback(err,result)
             })
    })

}
/**
 * 暴露给控制器用的，修改一个的方法
 * @param {*} collectionName 集合名称
 * @param {*} params 参数对象
 * @param {*} callback 回调函数
 */
exports.updateOne =(collectionName,condition,params,callback)=>{
    connectDb(collectionName,(err,collection,client)=>{
       
      collection.updateOne(condition,{ $set: params },(err,result)=>{
            client.close()
            callback(err,result)
      })
 })
}
/**
 * 暴露给控制器用的，删除一个的方法
 * @param {*} collectionName 集合名称
 * @param {*} params 参数对象
 * @param {*} callback 回调函数
 */
exports.deleteOne=(collectionName,params,callback)=>{
    connectDb(collectionName,(err,collection,client)=>{
       
        collection.deleteOne(params,(err,result)=>{
              client.close()
              callback(err,result)
        })
   })
}