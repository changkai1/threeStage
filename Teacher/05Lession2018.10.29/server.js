const express=require("express");
const app=express();
// 将weibo文件夹下的内容作为静态资源使用。
// app.use(express.static("./weibo"));
app.use(express.static("../"));
app.get("/",function(req,res){
    res.end("over");
})
app.get("/user",function(req,res){
    res.end("user");
})
app.listen(80,function(){
    console.log("开启成功")
})