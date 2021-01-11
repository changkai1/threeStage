const {upPic} =require("../modules/upPic");
const db=require("../modules/db")
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