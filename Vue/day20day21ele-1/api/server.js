const express=require("express");
const db=require("./modules/db");
const common=require("./modules/common")
const bodyParser=require("body-parser");
const md5=require("md5");
const app=express();
const myEnum=require("./modules/Enum")
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended:false
// }))



app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    // res.header("Access-Control-Allow-Methods","POST,OPTIONS");
    res.header("Access-Control-Allow-Headers","content-type");
    next();
});
// 获得管理员日志列表
app.get("/getAdminLogList",function(req,res){
    db.getAdminLogList(function(err,adminLogList){
        res.json({
            ok:1,
            adminLogList,
            adminLogEnum:myEnum.adminLogEnum
        })
    });
})
app.post("/login",function(req,res){
    // console.log(req.body);
    db.findOne("adminList",{
        adminName:req.body.adminName,
        passWord:md5(req.body.passWord)
    },function(err,adminInfo){
        if(adminInfo){
            db.insertOne("adminLog",{
                adminId:adminInfo._id,
                logType:1,
                addTime:Date.now(),
                detail:adminInfo.adminName+"于"+common.getNowTime()+"登陆了"
            },function(err,results){
                res.json({
                    ok:1,
                    adminId:adminInfo._id,
                    adminName:adminInfo.adminName,
                    msg:"恭喜您，登陆成功！"
                })
            })

        }else{
            res.json({
                ok:2,
                msg:"用户名或密码错误"
            })
        }
    })

})
app.get("/get",function(req,res){
    console.log(req.query);
    res.json({
        ok:1,
        msg:"你们困吗？"
    })
})
app.post("/post",function(req,res){
    console.log(req.body);
    res.json({
        ok:1,
        msg:"你们困吗？"
    })
})
app.listen(80,function(){
    console.log("success");
})
