const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const admin =require("./router/admin")
const shop =require("./router/shop")
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended:false
// }))
// app.all("*",function(req,res,next){
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Methods","DELETE");
//     res.header("Access-Control-Allow-Headers","content-type");
//     next();
// });

/***************************店铺相关********************************************/
app.post("/addShopType",shop.addShopType)
/***************************管理员相关********************************************/
// 删除日志
app.delete("/adminLogList",admin.adminLogList)
// 获得管理员日志列表
app.get("/getAdminLogList",admin.getAdminLogList);
// 登陆相关
app.post("/login",admin.login);
// app.get("/get",function(req,res){
//     console.log(req.query);
//     res.json({
//         ok:1,
//         msg:"你们困吗？"
//     })
// })
// app.post("/post",function(req,res){
//     console.log(req.body);
//     res.json({
//         ok:1,
//         msg:"你们困吗？"
//     })
// })
app.listen(80,function(){
    console.log("success");
})
