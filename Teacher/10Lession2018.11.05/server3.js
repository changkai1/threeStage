const express=require("express");
// ejs
const ejs=require("ejs");
const db=require("./modules/db");
const app=express();

app.set("view engine","ejs");
app.set("views","html");// 将默认views文件夹修改为 html文件夹
app.use(express.static("./html"))
app.get("/",function(req,res){
    res.render("ziji",{});
})
app.get("/reg",function(req,res){
    res.end(ok);
})
app.listen(80,function(){
    console.log("success");
})