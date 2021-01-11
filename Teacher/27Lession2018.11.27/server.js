// 发送验证码 ，登陆
// 验证码要放到数据库当中。
// 用户集合，短信集合
// 发送验证码
var express=require("express");
var bodyParser=require("body-parser");
var app=express();
app.use(bodyParser.json());

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

app.get("/getAdv",function(req,res){
    // advType:1 通栏，2 通栏底部广告
    db.find("advList",{
        whereObj:{
            advType:req.query.advType
        },
        limitNum:req.query.limit/1
    },function(err,results){
        res.json({
            ok:1,
            advInfo:req.query.limit/1>1?results:results[0]
        })
    })
})

// 登陆注册二合一
app.post("/login",function(req,res){
    // phoneId, code
    db.findOne("codeList",{
        phoneId,
        code
    },function(err,info){
        if(info){
            if(info.createTime+5*60*1000>Date.now()){
                // 成功
                db.findOne("userList",{
                    phoneId
                },function(err,info){
                    if(info){
                        res.json({
                            ok:1,
                            phoneId:info.phoneId,
                            goldNum:info.goldNum
                        })
                    }else{
                        db.insertOne("userList",{
                            phoneId,
                            goldNum:9999999
                        },function(err,results){
                            res.json({
                                ok:1,
                                phoneId,
                                goldNum:9999999
                            })
                        })
                    }
                })
            }else{
                res.json({
                    ok:2,
                    msg:"验证码过期"
                })
            }
        }else{
            res.json({
                ok:2,
                msg:"验证码错误"
            })
        }
    })
})

app.post("/sendCode",function (req,res) {

    db.findOne("codeList",{
        phoneId
    },function(err,info){
        if(info){
            if(info.createTime+5*60*1000>Date.now()){
                res.json({
                    ok:1,
                    msg:"您距离下次发送验证的时间还有XXX"
                })
            }else{
                    // 添加验证码
            }
        }else{

        }

    })

    var code=getRandom(100000,999999);
    var phoneId=req.body.phoneId;
    db.insertOne("codeList",{
        phoneId,
        code,
        createTime:Date.now()
    },function(err,results){
        res.json({
            ok:1,
            code
        })
    })
})