const http=require("http");
const fs=require("fs");
const url=require("url");
http.createServer(function(req,res){
    if(req.url=="/"){
        fs.readFile("./index.html",function(err,results){
            console.log(results);
            res.end(results);
        })
    }else if(req.url=="/favicon.ico"){
        fs.readFile("./index.html",function(err,results){
            console.log(results);
            res.end(results);
        })
    }

}).listen(80)