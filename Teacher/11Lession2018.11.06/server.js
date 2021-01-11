const express=require("express");
const sha1=require("sha1");
const request=require("request");
const fs=require("fs");
const {getAccess_Token}=require("./modules/token");
const xmlJs=require("xml2js");
const app=express();

var appID="wxf6e9de20bd933cdf";
var appsecret="c0b3f8aa69285e53d41ff90fbaf01401";
// 获得token
// function getAccess_Token(cb){
//     fs.readFile("./token.json",function(err,results) {
//         var tokenInfo = JSON.parse(results);
//         // 存储的TOKEN可以使用
//         if (tokenInfo.access_token.length > 0 && tokenInfo.expires_time >= Date.now()) {
//             cb(tokenInfo.access_token);
//         } else {
//             var url="https://api.weixin.qq.com/cgi-bin/token?" +
//                 "grant_type=client_credential" +
//                 "&appid=" +appID+
//                 "&secret="+appsecret
//             request(url,function(err,response,body){
//                 if(!err && response.statusCode===200){
//                     var info=JSON.parse(body);
//                     var objStr=JSON.stringify({
//                         access_token:info.access_token,
//                         expires_time:Date.now()+info.expires_in*1000
//                     });
//                     fs.writeFile("./token.json",objStr,function(err){
//                         cb(info.access_token);
//                     })
//                 }
//             })
//         }
//     });
//
// }

app.post("/weixin",function(req,res){
    req.on("data",function(body){
        // xml---->json   json---->xml
        // console.log(body);
        // console.log(xmlJs.parseString(body));

        // xml-----json

        xmlJs.parseString(body,function(err,json){
            getAccess_Token(function(access_token){
                var url="https://api.weixin.qq.com/cgi-bin/user/info?" +
                    "access_token=" +access_token+
                    "&openid=" +json.xml.FromUserName[0]+
                    "&lang=zh_CN"
                request(url,function(err,response,body){
                    console.log(body.toString());
                    res.end();
                })
            })




            // if(json.xml.MsgType[0]==="text"){
            //     console.log(json.xml);
            //     var Content="小样的";
            //     if(json.xml.Content){
            //         Content=json.xml.Content[0];
            //     }
            //     var num=100;
            //     var toInfo={
            //         xml:{
            //             ToUserName:json.xml.FromUserName[0],
            //             FromUserName:json.xml.ToUserName[0],
            //             CreateTime:Date.now(),
            //             MsgType:"text",
            //             Content:Content+"啦啦啦！"
            //         }
            //     }
            //     // json--->xml
            //     var builder=new xmlJs.Builder();
            //     var xml=builder.buildObject(toInfo);
            //     res.send(xml);
            // }

        })
    //
    // <xml>
    //     <ToUserName>< ![CDATA[toUser] ]></ToUserName>
    //     <FromUserName>< ![CDATA[fromUser] ]></FromUserName>
    //     <CreateTime>12345678</CreateTime>
    //     <MsgType>< ![CDATA[text] ]></MsgType>
    //     <Content>< ![CDATA[你好] ]></Content>
    // </xml>
    //     console.log(body.toString());
    //     res.end();
    })
})
// 自定义菜单
app.get("/createMenu",function(req,res){
    getAccess_Token(function(access_token){
        request({
            method:"post",
            url:"https://api.weixin.qq.com/cgi-bin/menu/create?access_token="+access_token,
            json:true,
            body: {
                "button":[
                    {
                        "type":"click",
                        "name":"明天真好",
                        "key":"V1001_TODAY_MUSIC"
                    },
                    {
                        "name":"菜单啦",
                        "sub_button":[
                            {
                                "type":"view",
                                "name":"搜索",
                                "url":"http://www.baidu.com/"
                            },
                            {
                                "type":"click",
                                "name":"赞一下我们",
                                "key":"V1001_GOOD"
                            }]
                    }]
            }
        },function(err,response,body){
            console.log(body);
            res.end(JSON.stringify(body));
        })
    })
})
// get 微信请求
app.get("/weixin",function(req,res){
    console.log(req.query);
    //1）将token、timestamp、nonce三个参数进行字典序排序
    var arr=["zhangpeiyue",req.query.timestamp,req.query.nonce].sort();
    // 2）将三个参数字符串拼接成一个字符串进行sha1加密
    var str=arr.join("");
    var strSha1=sha1(str);
    console.log(strSha1);
    // 3）开发者获得加密后的字符串可与signature对比，
    if(strSha1===req.query.signature){
        res.end(req.query.echostr);
    }else{
        res.end("error");
    }
})


app.listen(80,function(){
    console.log("success");
})