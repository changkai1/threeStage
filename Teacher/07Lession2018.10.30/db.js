const mongodb=require("mongodb");
const mongoClient=mongodb.MongoClient;
function _connect(cb){
    mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true },function(err,client){
        if(err)
            console.log("连接数据库失败");
        else{
            // 操作数据库
            var db= client.db("weibo");//你要操作的数据库的名字是.  db即是你要操作的数据库
            cb(db);
        }
    })
}
module.exports.insertMany=function(arr,cb){
    _connect(function(db){
        db.insertMany(arr,function(err,reuslts){
            cb(err,results);
        })
    })
}
module.exports.insertOne=function(obj,cb){
    _connect(function(db){
        db.insertOne(obj,function(err,results){
            cb(err,results);
        })
    });
    // mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true },function(err,client){
    //     if(err)
    //         console.log("连接数据库失败");
    //     else{
    //         // 操作数据库
    //         var db= client.db("weibo");//你要操作的数据库的名字是.  db即是你要操作的数据库
    //         db.insertOne(obj,function(err,results){
    //             cb(err,results);
    //         })
    //     }
    // })

}
