const mongodb=require("mongodb");
const mongoClient=mongodb.MongoClient;
mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true },function(err,client){
    if(err)
        console.log("数据库连接失败");
    else{
        console.log("数据库连接成功");
        var db=client.db("study");

        // 删除一条
        // db.collection("score").deleteOne({sex:"女"},function(err,results){
        //     console.log(err,results);
        // })
        // 删除多条
        db.collection("score").deleteMany({},function(err,results){
            console.log(err,results);
        })



        // console.log(typeof "5bd91d45fa9da22f0044bf10");
        // console.log(typeof mongodb.ObjectId("5bd91d45fa9da22f0044bf10"));
        // console.log( mongodb.ObjectId("5bd91d45fa9da22f0044bf10"));
        // console.log("5bd91d45fa9da22f0044bf10");

         // db.collection("score").findOne({_id:mongodb.ObjectId("5bd91d45fa9da22f0044bf10")},function(err,results){
         //     console.log(err,results);
         // })

        // db.collection("score").updateOne({userName:"王五"},{$inc:{age:1}},function(err,results){
        //     console.log(err,results);
        // })

        // 修改多条
        // db.collection("score").updateMany({},{$set:{
        //         age:21
        //     }},function(err,results){
        //     console.log(err,results);
        // })
        // db.collection("score").updateMany({sex:"女"},{$set:{
        //         age:12
        //     }},function(err,results){
        //     console.log(err,results);
        // })
        // 更改一条
        // db.collection("score").updateOne({sex:"女"},{$set:{
        //         age:16
        //     }},function(err,results){
        //     console.log(err,results);
        // })
        // db.collection("score").updateOne({userName:"张三"},{$set:{
        //         age:20
        //     }},function(err,results){
        //     console.log(err,results);
        // })


        // db.collection("score").find().sort({age:-1}).skip(1).limit(1).toArray(function(err,results){
        //     console.log(err,results);
        // })
        // 读取多条
        // db.collection("score").find({age:{$gt:12}}).toArray(function(err,results){
        //     console.log(err,results);
        // })
        // 读取一条
        // db.collection("score").findOne({userName:"王五"},function(err,results){
        //     console.log(err,results);
        // })
        // 插入多条
        // db.collection("score").insertMany([
        //     {userName:"李四",sex:"女",age:18},
        //     {userName:"王五",sex:"女",age:17}],function(err,results){
        //     console.log(err,results);
        // })
        // 插入一条
        // db.collection("score").insertOne({userName:"张三",sex:"男",age:12},function(err,results){
        //     console.log(err,results);
        // })
    }

})