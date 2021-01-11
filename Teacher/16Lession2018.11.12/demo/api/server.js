const express=require("express");
const bodyParser=require("body-parser");
const db=require("./modules/db");
const app=express();
app.use(bodyParser.json());
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","content-type");
    next();
});
// 获得商品信息
app.get("/getGoodsList",function(req,res){
    db.find("goodsList",{
        sortObj:{
            addTime:-1
        }
    },function(err,goodsList){
        res.json({
            ok:1,
            goodsList
        })
    })
});
// 用户登陆
app.post("/login",function(req,res){
    /*
    * 1、登陆。手机号和验证码。 88888*/
    if(req.body.code==="88888"){
        db.findOne("userList",{
            phoneId:req.body.phoneId
        },function(err,userInfo){
            if(userInfo){// 有该用户
                res.json({
                    ok:1,
                    phoneId:userInfo.phoneId
                })
            } else{
                db.insertOne("userList",{
                    phoneId:req.body.phoneId,
                    createTime:Date.now()
                },function(err,results){
                    res.json({
                        ok:1,
                        phoneId:req.body.phoneId
                    })
                })
            }
        })
    }else{
        res.json({
            ok:2,
            msg:"验证码错误！"
        })
    }

});
// 加入购物车
app.get("/joinCar",function(req,res){
    /*思路：
    * 1、phoneId,goodsId
    * 2、验证一下库存是否充足
    *   1、不充足
    *       直接返回参数，告诉库存不足
    *   2、充足;
    *       1、查看购物车内是否有该商品
    *           1、有
    *               加1
    *           2、无
    *               增加一条记录
    *        2、将你的库存减1*/
    var phoneId=req.query.phoneId;
    var goodsId=req.query.goodsId;
    db.findOneById("goodsList",goodsId,function(err,goodsInfo){
        if(goodsInfo.storeNum<1){//库存不足
            res.json({
                ok:2,
                msg:"该商品库存不足"
            })
        }else{
            db.findOne("carList",{
                goodsId,
                phoneId
            },function(err,carInfo){
                // 库存减1
                db.updateOneById("goodsList",goodsId,{
                    $inc:{
                        storeNum:-1
                    }
                },function(err,results){
                    if(carInfo){
                        db.updateOne("carList",{_id:carInfo._id},{
                            $inc:{
                                buyNum:1
                            }
                        },function(err,results){
                            res.json({
                                ok:1,
                                msg:"加入购物车成功"
                            })
                        })
                    }else{
                        db.insertOne("carList",{
                            phoneId,
                            goodsId,
                            goodsName:goodsInfo.goodsName,
                            goodsPrice:goodsInfo.goodsPrice,
                            buyNum:1,
                            buyTime:Date.now(),
                            isOk:1
                        },function(err,results){
                            res.json({
                                ok:1,
                                msg:"加入购物车成功"
                            })
                        })
                    }
                })

            })
        }
    })

});
// 获得我的购物车信息
app.get("/getMyCarList",function(req,res){
    var phoneId=req.query.phoneId;
    db.find("carList",{
        phoneId
    },function(err,carList){
        res.json({
            ok:1,
            carList
        })
    })
});
app.get("/changeAllIsOk",function(req,res){
    var allIsOk=req.query.allIsOk;// 获得是否全部被选中
    var phoneId=req.query.phoneId;
    db.updateMany("carList",{
        phoneId
    },{
        $set:{
            isOk:allIsOk/1===0?1:0
        }
    },function(){
        res.json({
            ok:1,
            msg:"成功"
        })
    })
});
app.get("/changeCarInfo",function(req,res){
    var id=req.query.id;
    var isOk=req.query.isOk/1;
    db.updateOneById("carList",id,{
        $set:{
            isOk:isOk===1?0:1
        }
    },function(){
        res.json({
            ok:1,
            msg:"成功"
        })
    })
})
app.listen(80,function(){
    console.log("success");
})