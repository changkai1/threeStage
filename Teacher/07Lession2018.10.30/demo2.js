const express=require("express");
const bodyParser=require("body-parser");
const db=require("./db");
const app=express();
app.use(bodyParser.json());
app.post("/addWeibo",function(req,res){
    db.insertOne({
        context:req.body.context,
        topNum:0,
        downNum:0,
        addTime:Date.now()
    },function(err,results){
        if(err)
            res.json({
                ok:2,
                msg:"网络连接错误"
            })
        else
            res.json({
                ok:2,
                msg:"插功入成功"
            })
    })
    // mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true },function(err,client){
    //     if(err)
    //         res.json({
    //             ok:2,
    //             msg:"网络连接错误"
    //         })
    //     else{
    //         // 操作数据库
    //         var db= client.db("weibo");//你要操作的数据库的名字是.  db即是你要操作的数据库
    //         db.collection("contextList").insertOne({
    //             context:req.body.context,
    //             topNum:0,
    //             downNum:0,
    //             addTime:Date.now()
    //         },function(err,results){
    //             if(err)
    //                 console.log("插入多条数据失败");
    //             else
    //                 console.log("插入多条数据成功");
    //         })
    //     }
    // })
})
app.listen(80,function(){
    console.log("success");
})






// const express=require("express");
// const bodyParser=require("body-parser");
// const mongodb=require("mongodb");
// const mongoClient=mongodb.MongoClient;
// const app=express();
// app.use(bodyParser.json());
// app.post("/addWeibo",function(req,res){
//     mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true },function(err,client){
//         if(err)
//             res.json({
//                 ok:2,
//                 msg:"网络连接错误"
//             })
//         else{
//             // 操作数据库
//             var db= client.db("weibo");//你要操作的数据库的名字是.  db即是你要操作的数据库
//             db.collection("contextList").insertOne({
//                 context:req.body.context,
//                 topNum:0,
//                 downNum:0,
//                 addTime:Date.now()
//             },function(err,results){
//                 if(err)
//                     console.log("插入多条数据失败");
//                 else
//                     console.log("插入多条数据成功");
//             })
//         }
//     })
// })
// app.listen(80,function(){
//     console.log("success");
// })