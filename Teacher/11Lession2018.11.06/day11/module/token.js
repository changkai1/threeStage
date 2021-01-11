const request=require("request");
const fs=require("fs");
var appId="wx0af2e1ab41729aa9";
var appsecret="51c038e4b3c8de37ea7b29353fcb18ae";
module.exports.getAccessToken=function(cb){
    // access_token
    fs.readFile("./token.json",function(err,results){
        var tokenInfo=JSON.parse(results);
        // 判断是否存在token 过期时间要大于等于当前时间，才说明没有过期
        if(tokenInfo.access_token.length>0 && tokenInfo.expires_time>=Date.now()){
            cb(tokenInfo.access_token);
        }else{
            var url="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&" +
                "appid=" +appId+
                "&secret="+appsecret
            request(url,function(err,response,body){
                if(!err && response.statusCode===200){
                    var info=JSON.parse(body);
                    var obj={
                        "access_token":info.access_token,
                        "expires_time":Date.now()+info.expires_in*1000
                    }
                    fs.writeFile("./token.json",JSON.stringify(obj),function(err){
                        cb(info.access_token);
                    })
                }else{
                    cb(null);
                }
            })
        }
    })

}