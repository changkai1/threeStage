const express=require("express");
const app=express();
app.get("/user/:id/:type",function(req,res){
    // console.log(req.query);
    console.log(req.params);
    res.end("over");
})
// app.get("/user",function(req,res){
//     console.log(req.query);
//     res.end("over");
// })
app.listen(80,function(){
    console.log("success");
})