const express=require("express");
const db=require("./modules/db");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.json());
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    // res.header("Access-Control-Allow-Methods","POST,OPTIONS");
    res.header("Access-Control-Allow-Headers","content-type");
    next();
})
// app.post("/post",function(req,res){
//     console.log(req.body);
//     res.end();
// })
app.post("/addweibo",function(req,res){
    db.insertOne("contextList",{
        context:req.body.context,
        topNum:0,
        downNum:0,
        addTime:Date.now()
    },function(err,results){
        res.json({
            ok:1,
            msg:"成功"
        })
    })
})
app.get("/getweibo",function(req,res){
    db.find("contextList",{
        sortObj:{
            addTime:-1
        }
    },function(err,contextList){
        res.json({
            ok:1,
            contextList
        })
    })
})
app.get("/sum",function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.json({
        ok:1,
        sum:req.query.num/1+req.query.num2/1
    })
})
app.listen(80,function(){
    console.log("success");
})
