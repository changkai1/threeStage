const express=require("express");
const app=express();

app.get("/user",function(req,res,next){
    console.log(111111);
    // res.end("user1");
    next();// 继续向下查找是否要符合条件的路由。
})
app.get("/user",function(req,res){
    res.end("user2");
})

app.listen(80,function(){
    console.log("success");
})


//
// const app=require("express")();
//
// app.use(express.staitc)