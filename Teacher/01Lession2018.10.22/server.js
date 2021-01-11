var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){


    console.log(req.url);//
    if(req.url=="/"){
        fs.readFile("./server2.html",function(err,results){
            res.end(results);
        })
    }else if(req.url=="/favicon.ico"){
        fs.readFile("./favicon.ico",function(err,results){
            res.end(results);
        })
    }else if(req.url=="/a"){
        fs.readFile("./style/style.css",function(err,results){
            res.end(results);
        })
    }else{
        res.end("404");
    }


}).listen(80,function(){
    console.log("success");
})