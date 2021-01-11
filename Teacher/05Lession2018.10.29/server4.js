const express=require("express");
const mo=require("./modue/mo");
const app=express();
app.use(express.static("./html"));
// 接口，返回新闻列表
app.get("/newList",function(req,res){
    res.json(mo.newList);
})

app.listen(80,function(){
    console.log("success");
})
