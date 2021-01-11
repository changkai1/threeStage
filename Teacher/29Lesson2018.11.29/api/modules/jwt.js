const jwt=require("jwt-simple");
const key="@!#@$#@#%#$%1212"
// 加密
module.exports.encode=function(payload){
    payload.exp=Date.now()+10*60*1000;
    return jwt.encode(payload,key);
}
// 解密
module.exports.decode=function(token){
    try{
        var status=jwt.decode(token,key);
        if(status.exp>Date.now()){
            return {
                ok:1,
                msg:"成功",
                status
            }
        }else{
            return {
                ok:-2,
                msg:"过期啦"
            }
        }
    }
    catch (err){
        return ({
            ok:-1,
            msg:"token发生错误"
        })
    }
}