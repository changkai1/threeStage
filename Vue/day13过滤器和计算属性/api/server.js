const express=require("express");
const db=require("./modules/db")
const app=express();
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    next();
})
app.get("/addweibo",function(req,res){
    db.insertOne("contextList",{
        context:req.query.context,
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
app.get("/sum",function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.json({
        ok:1,
        sum:req.query.num/1+req.query.num2/1
    })
})
app.listen(8081,function(){
    console.log("success");
})