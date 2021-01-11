const request=require("request");
const fs=require("fs");
var appID="wxf6e9de20bd933cdf";
var appsecret="c0b3f8aa69285e53d41ff90fbaf01401";
module.exports.getAccess_Token=function(cb){
    fs.readFile("./token.json",function(err,results){
        var tokenInfo=JSON.parse(results);
        // 存储的TOKEN可以使用
        if(tokenInfo.access_token.length>0 && tokenInfo.expires_time>=Date.now()){
            cb(tokenInfo.access_token);
        }else{
            var url="https://api.weixin.qq.com/cgi-bin/token.json?" +
                "grant_type=client_credential" +
                "&appid=" +appID+
                "&secret="+appsecret
            request(url,function(err,response,body){
                if(!err && response.statusCode===200){
                    var info=JSON.parse(body);
                    console.log(11111,info);
                    var objStr=JSON.stringify({
                        access_token:info.access_token,
                        expires_time:Date.now()+info.expires_in*1000
                    });
                    console.log(2222,objStr);



                    fs.writeFile("./token.json",objStr,function(err){
                        cb(info.access_token);
                    })
                }else{
                    cb(null);
                }
            })
        }
    })

}