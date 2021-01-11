const mongodb=require("mongodb");
const mongoClient=mongodb.MongoClient;//mongodb下面的一个客户端，是一个他下面得对象
//通过该对象连接数据库
mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true },function(err,client){
    if(err)
        console.log("连接数据库失败");
    else{
        // 操作数据库
        var db= client.db("weibo");//你要操作的数据库的名字是.  db即是你要操作的数据库
        db.collection("yiyi").insertMany([{userName:"laoli",age:18},{sex:"女"}],function(err,results){
                if(err)
                    console.log("插入多条数据失败");
                else
                    console.log("插入多条数据成功");
        })
        // db.collection("yiyi").insertOne({userName:"laowangtou",age:16},function(err,results){
        //     if(err)
        //         console.log("插入一条数据失败");
        //     else
        //         console.log("插入一条数据成功");
        // })
    }
})