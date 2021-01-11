const myEnum=require("../modules/Enum");
const md5=require("md5");
const db=require("../modules/db");
const common=require("../modules/common")
module.exports.adminLogList=function(req,res){
    console.log(req.query);
    db.deleteOneById("adminLog",req.query.id,function(err){
        console.log(err);
        res.json({
            ok:1,
            msg:"删除成功"
        })
    })

}
module.exports.getAdminLogList=function(req,res){
    var pageIndex=req.query.pageIndex/1;
    var pageSum=1;
    var pageNum=2;
    db.count("adminLog",{},function(count){
        var pageSum=Math.ceil(count/pageNum);//总页数
        if(pageSum<0)
            pageSum=1;
        if(pageIndex>pageSum)
            pageIndex=pageSum;
        db.getAdminLogList((pageIndex-1)*pageNum,pageNum,function(err,adminLogList){
            // setTimeout(()=>{
            res.json({
                ok:1,
                adminLogList,
                pageSum
                // adminLogEnum:myEnum.adminLogEnum
            })
            // },2000)

        });
    })

}
module.exports.login=function(req,res){
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

}