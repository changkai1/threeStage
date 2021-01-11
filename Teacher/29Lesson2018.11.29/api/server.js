const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const jwt=require("./modules/jwt")

app.use(bodyParser.json());
app.use(express.static("./upload"));
// app.use(bodyParser.urlencoded({
//     extended:false
// }))
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","DELETE");
    res.header("Access-Control-Allow-Headers","content-type,authorization");

    next();
});
app.post("/token",function(req,res){
     console.log(req.headers.authorization);
     var info=jwt.decode(req.headers.authorization);
     console.log(info);
     res.end();
})
app.get("/login",function(req,res){
    var token=jwt.encode({
        phoneId:"121212"
    })
    console.log(token);
    res.json({
        ok:1,
        token
    })
})




app.get("/getShopType",function(req,res){
    // var arr=[1,2,3,4,5,6,7,8,9,10,11,12];
    var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
//
    var num=Math.ceil(arr.length/10);
    var shopTypeList=[];
    for(var i=0;i<num;i++){
        shopTypeList[i]=[];
        for(var j=i*10;j<i*10+10 && j<arr.length;j++){
            shopTypeList[i].push(arr[j]);
        }
    }
    res.json({
        ok:1,
        shopTypeList
    })
})

app.get("/getShopList",function(req,res){
    var pageIndex=req.query.pageIndex/1;
    var pageNum=10;
    var skipNum=(pageIndex-1)*pageNum;
    var shopList=[];
    for(var i=skipNum;i<skipNum+pageNum;i++){
        shopList.push(i);
    }
    setTimeout(()=>{
        res.json({
            ok:1,
            shopList,
            // isOver:pageIndex===总页数
        })
    },2000)

})











// /***************************店铺相关********************************************/
// app.post("/addShopType",shop.addShopType);
// app.get("/shopType",shop.getShopType);
// app.post("/addShop",shop.addShop);// 添加店铺
// app.put("/addShop",shop.upShop);// 修改店铺
// app.get("/getShopList",shop.getShopList);// 获得店铺列表
// app.get("/getShopInfoById",shop.getShopInfoById);// 根据 店铺ID获得店铺信息
// /***************************管理员相关********************************************/
// // 删除日志
// app.delete("/adminLogList",admin.adminLogList)
// // 获得管理员日志列表
// app.get("/getAdminLogList",admin.getAdminLogList);
// // 登陆相关
// app.post("/login",admin.login);
// // app.get("/get",function(req,res){
// //     console.log(req.query);
// //     res.json({
// //         ok:1,
// //         msg:"你们困吗？"
// //     })
// // })
// // app.post("/post",function(req,res){
// //     console.log(req.body);
// //     res.json({
// //         ok:1,
// //         msg:"你们困吗？"
// //     })
// // })
app.listen(80,function(){
    console.log("success");
})
