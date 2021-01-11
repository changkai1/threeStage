const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const admin =require("./router/admin")
const shop =require("./router/shop")
app.use(bodyParser.json());
app.use(express.static("./upload"));
// app.use(bodyParser.urlencoded({
//     extended:false
// }))
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","DELETE");
    res.header("Access-Control-Allow-Methods","PUT");
    res.header("Access-Control-Allow-Headers","content-type");
    next();
});

/***************************店铺相关********************************************/
app.post("/addShopType",shop.addShopType);
app.get("/shopType",shop.getShopType);
app.post("/addShop",shop.addShop); // 添加店铺
app.get("/getShopList",shop.getShopList); //获得店铺列表
app.get("/getShopInfoById",shop.getShopInfoById); //根据 店铺Id获得店铺信息
app.put("/addShop",shop.upShop); //修改店铺
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
