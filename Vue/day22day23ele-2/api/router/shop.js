const {upPic} =require("../modules/upPic");
const db=require("../modules/db");
const mongodb = require("mongodb");
module.exports.addShopType=function(req,res){
    upPic(req,"shopTypePic",function(obj){
        console.log(obj);
        if(obj.ok===1){
            db.insertOne("shopTypeList",{
                shopTypeName:obj.params.shopTypeName,
                shopTypePic:obj.newPicName,
                addTime:Date.now()
            },function(){
                res.json({
                    ok:1,
                    msg:"上传成功"
                })
            })
        }else{
            res.json({
                ok:2,
                msg:obj.msg
            })
        }
    })
}
module.exports.getShopType = function(req,res){
    db.find("shopTypeList",{
        sortObj:{
            addTime:-1
        }
    },function(err,shopTypeList){
        res.json({
            ok:1,
            shopTypeList
        })
    })
}

module.exports.addShop=function(req,res){
    upPic(req,"shopPic",function(obj){
        console.log(obj);
        if(obj.ok===1){
            db.insertOne("shopList",{
                shopName:obj.params.shopName,
                shopPic:obj.newPicName,
                shopTypeId:mongodb.ObjectID(obj.params.shopTypeId),
                addTime:Date.now()
            },function(){
                res.json({
                    ok:1,
                    msg:"上传成功"
                })
            })
        }else{
            res.json({
                ok:2,
                msg:obj.msg
            })
        }
    })
}

module.exports.getShopList = function(req,res){
    var shopName = req.query.shopName;
    var whereObj = {
        shopName:new RegExp(shopName)
    }
    db.getShopList(whereObj,function(err,shopList){
        res.json({
            ok:1,
            shopList
        })
    })
}

module.exports.getShopInfoById = function(req,res){
    db.findOneById("shopList",req.query.shopId,function(err,shopInfo){
        res.json({
            ok:1,
            shopInfo
        })
    })
}

module.exports.upShop=function(req,res){
    upPic(req,"shopPic",function(obj){
        console.log(obj);
        if(obj.ok===2){
            res.json({
                ok:2,
                msg:obj.msg
            })
        }else{
            var upObj={
                $set:{
                    shopName:obj.params.shopName,
                    shopTypeId:mongodb.ObjectID(obj.params.shopTypeId),
                }
            }
            if(obj.newPicName){// 上传了图片
                upObj.$set.shopPic=obj.newPicName;
            }
            db.updateOneById("shopList",obj.params.shopId,upObj,function(err,results){
                res.json({
                    ok:1,
                    msg:"成功"
                })
            })
        }

    })
}











