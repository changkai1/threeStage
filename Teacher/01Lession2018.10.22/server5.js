var http=require("http");
var fs=require("fs");
var url=require("url");
http.createServer(function(req,res){
    // http://127.0.0.1/sum?a=1&b=2&c=3
    console.log(req.rawHeaders);
    console.log(req.url); //---------/sum?a=1&b=2&c=3
    console.log(url.parse(req.url).pathname);// ---------/sum
    console.log(url.parse(req.url).query);// ---------/   a=1&b=2&c=3
    console.log(url.parse(req.url,true).query);//-------{ a: '1', b: '2', c: '3' }
    res.end();

}).listen(80,function(){
    console.log("success");
})