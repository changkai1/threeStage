const express=require("express");
const app=express();
app.use(express.static("./html"));
app.get("/login",function(req,res){
    res.json({
        ok:1,
        msg:"lala"
    })
})
app.get("/reg",function(req,res){
    console.log(req.headers.origin);// http://ip:端口号
    // 允许多人访问我
    var arr=[];
    // 数组
    for(var i=1;i<=200;i++){
        arr.push("http://10.9.168."+i)
    }
    if(arr.includes(req.headers.origin))
        res.header("Access-Control-Allow-Origin",req.headers.origin);
    res.json({
        ok:1,
        msg:"lala"
    })
})
app.listen(80,function(){
    console.log("success");
})