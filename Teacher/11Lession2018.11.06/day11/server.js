const express=require("express");
const sha1=require("sha1");
const request=require("request");
const xmlJs=require("xml2js");
const fs=require("fs");
const {getAccessToken} =require("./module/token")
const app=express();


app.get("/createmenu",function(req,res){
    getAccessToken(function(access_token){
        request({
            url:"https://api.weixin.qq.com/cgi-bin/menu/create?access_token="+access_token,
            method:"post",
            json:true,
            body:{
                "button":[
                    {
                        "type":"click",
                        "name":"爸爸好",
                        "key":"V1001_TODAY_MUSIC"
                    },
                    {
                        "name":"妈妈好",
                        "sub_button":[
                            {
                                "type":"view",
                                "name":"搜索",
                                "url":"http://www.163.com/"
                            },
                            {
                                "type":"click",
                                "name":"赞一下我们",
                                "key":"V1001_GOOD"
                            }]
                    }]
            }
        },function(err,response,body){
            res.send(body);
        })
        // console.log(access_token);
        // res.end(access_token);
    })
});
app.get("/deletemenu",function(req,res){
    getAccessToken(function(access_token){
        request("https://api.weixin.qq.com/cgi-bin/menu/delete?access_token="+access_token,function(err,response,body){
            res.send(body);
        })
    })

})
app.get("/weixin",function (req,res) {
    console.log(req.query);// 接收GET过来的参数
    // 1）将token、timestamp、nonce三个参数进行字典序排序
    var arr=["zhangpeiyue",req.query.timestamp,req.query.nonce].sort();
    // 2）将三个参数字符串拼接成一个字符串进行sha1加密
    var str=arr.join("");
    var sha1Str=sha1(str);
    console.log(sha1Str);// 密钥

    // 3）开发者获得加密后的字符串可与signature对比，
    if(req.query.signature===sha1Str){
        res.end(req.query.echostr);
    }else{
        res.end("error");
    }
    // res.end();
});
// 接收消息
app.post("/weixin",function(req,res){
    req.on("data",function(body){
        // 接收到的数据  xml
        // console.log(body.toString());
        xmlJs.parseString(body,function(err,json){

            // 关注/取消关注事件
            // if(json.xml.MsgType[0]==="event"){
            //     if(json.xml.Event[0]==="subscribe"){//  关注我啦
            //         var jsonData={
            //             xml:{
            //                 ToUserName:json.xml.FromUserName[0],
            //                 FromUserName:json.xml.ToUserName[0],
            //                 CreateTime:Date.now(),
            //                 MsgType:"text",
            //                 Content:"谢谢关注我！"
            //             }
            //         }
            //         var builder=new xmlJs.Builder();
            //         var xml=builder.buildObject(jsonData);
            //         res.send(xml);
            //     }
            // }










            getAccessToken(function(access_token){
                // 自动回复图片
                var url="https://api.weixin.qq.com/cgi-bin/media/upload?" +
                    "access_token=" +access_token+
                    "&type=image";
                request({
                    method:"post",
                    url,
                    json:true,
                    formData:{
                        media:fs.createReadStream("./0.jpg")
                    }
                },function(err,response,body){
                // <xml>
                    // <ToUserName>< ![CDATA[toUser] ]></ToUserName>
                    // <FromUserName>< ![CDATA[fromUser] ]></FromUserName>
                    // <CreateTime>12345678</CreateTime>
                    // <MsgType>< ![CDATA[image] ]></MsgType>
                    // <Image>
                    // <MediaId>< ![CDATA[media_id] ]>
                    // </MediaId>
                    // </Image>
                    // </xml>

                    var jsonData={
                        xml:{
                            ToUserName:json.xml.FromUserName[0],
                            FromUserName:json.xml.ToUserName[0],
                            CreateTime:Date.now(),
                            MsgType:"image",
                            Image:{
                                MediaId:body.media_id
                            }
                        }
                    }
                    var builder=new xmlJs.Builder();
                    var xml=builder.buildObject(jsonData);
                    res.send(xml);
                    // console.log(body);
                    // res.end();
                })
            })














            // getAccessToken(function(access_token){
            //     var url="https://api.weixin.qq.com/cgi-bin/user/info?" +
            //         "access_token=" +access_token+
            //         "&openid=" +json.xml.FromUserName[0]+
            //         "&lang=zh_CN"
            //     request(url,function(err,response,body){
            //         var nickname=JSON.parse(body).nickname;
            //     // <xml>
            //         // <ToUserName>< ![CDATA[toUser] ]></ToUserName>
            //         // <FromUserName>< ![CDATA[fromUser] ]></FromUserName>
            //         // <CreateTime>12345678</CreateTime>
            //         // <MsgType>< ![CDATA[text] ]></MsgType>
            //         // <Content>< ![CDATA[你好] ]></Content>
            //         // </xml>
            //
            //         // var jsonData={
            //         //     xml:{
            //         //         ToUserName:json.xml.FromUserName[0],
            //         //         FromUserName:json.xml.ToUserName[0],
            //         //         CreateTime:Date.now(),
            //         //         MsgType:"text",
            //         //         Content:"欢迎"+nickname+"的到来"
            //         //     }
            //         // }
            //         // var builder=new xmlJs.Builder();
            //         // var xml=builder.buildObject(jsonData);
            //         // res.send(xml);
            //
            //
            //     })
            //
            // })

        })
        // res.end();
    })
})
app.listen(80,function(){
    console.log("success");
})