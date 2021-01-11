const express=require("express");
const ejs=require("ejs");
const bodyParser=require("body-parser");
const app=express();
app.set("view engine","ejs");
// app.use(bodyParser.urlencoded({
//     extended:false
// }))
app.use(bodyParser.json());
app.post("/info",function(req,res){
    console.log(req.body);
    res.json({
        ok:1,
        msg:"xixi"
    })
})
// 合作公司提供的接口

app.get("/userInfo",function(req,res){
    res.json({
        ok:1,
        msg:"lala"
    })
})
app.listen(8081,function(){
    console.log("success");
})