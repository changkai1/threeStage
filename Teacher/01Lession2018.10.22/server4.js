const http=require("http");
const fs=require("fs");
http.createServer(function(req,res){
    console.log(req.url);
    if(req.url=="/"){
        fs.readFile("./server2.html",function(err,result){
            res.end(result);
        })
    }else if(req.url=="/abc"){
        fs.readFile("./style/style.css",function(err,result){
            res.end(result);
        })
    }else if(req.url=="/favicon.ico"){
        fs.readFile("./favicon.ico",function(err,results){
            res.end(results);
        })
    }else{
        res.end("404");
    }


}).listen(80,"127.0.0.1");