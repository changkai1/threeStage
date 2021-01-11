const express=require("express");
const bodyParser=require("body-parser");
const mongodb=require("mongodb");
const common=require("./modules/common");
const mongoClient=mongodb.MongoClient;
const app=express();
app.use(express.static("./weibo"));
app.use(bodyParser.json());

function _connect(cb){
    mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true },function(err,client) {
          cb(cmongoClient.lient.db("weibo")) ;
    });
}
function insertOne(coll,obj,cb){
    // function callback(err,results){
    //     cb(err,results);
    // }
    _connect(function(db){
        db.collection(coll).insertOne(obj,cb)
        // db.collection(coll).insertOne(obj,function(err,results){
        //     cb(err,results);
        // })
    })
}
app.post("/addWeibo",function(req,res){
    insertOne("contextList",{
        context:req.body.context,
        topNum:0,
        downNum:0,
        addTime:common.getNowTime()
    },function(err,results){
        if(err)
            res.json({
                ok:2,
                msg:"网络连接错误"
            })
        else
            res.json({
                ok:1,
                msg:"提交成功！"
            })
    })


    // _connect(function(db){
    //     db.collection("contextList").insertOne({
    //         context:req.body.context,
    //         topNum:0,
    //         downNum:0,
    //         addTime:common.getNowTime()
    //     },function(err,results){
    //         if(err)
    //             res.json({
    //                 ok:2,
    //                 msg:"网络连接错误"
    //             })
    //         else
    //             res.json({
    //                 ok:1,
    //                 msg:"提交成功！"
    //             })
    //     })
    // })



    // mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true },function(err,client) {
    //     var db=client.db("weibo");
    //     db.collection("contextList").insertOne({
    //         context:req.body.context,
    //         topNum:0,
    //         downNum:0,
    //         addTime:common.getNowTime()
    //     },function(err,reuslts){
    //         if(err)
    //             res.json({
    //                 ok:2,
    //                 msg:"网络连接错误"
    //             })
    //         else
    //             res.json({
    //                 ok:1,
    //                 msg:"提交成功！"
    //             })
    //     })
    // })
})

app.listen(80,"127.0.0.1",function(){
    console.log("success");
})