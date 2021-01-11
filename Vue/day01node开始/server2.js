const http = require("http");
const fs = require("fs");  //对文件进行操作
//1.创建一个http服务
var server = http.createServer(function(req,res){
    // 读取server2.html文件
    console.log(req.url); //请求
    if(req.url == "/"){
        // 2.对文件读取
        fs.readFile("./server2.html",function(err,results){
            res.end(results); //响应
        })
    }else if(req.url == "/style/style.css" ){
        fs.readFile("./style/style.css",function(err,results){
            res.end(results); //响应
        })
    }else if( req.url == "/favicon.ico" ){
        fs.readFile("./favicon.ico",function(err,results){
            res.end(results); //响应
        })
    }else{
        res.end("404");
    }

})
server.listen(80,function(){
    console.log("开启成功");
});









