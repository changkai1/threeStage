// url
var http = require("http");
var fs = require("fs");
var url = require("url");
http.createServer(function(req,res){
    //http://127.0.0.1:80/sum?a=1&b=2&c=3
    console.log(111,req.url);                      //---sum?a=1&b=2&c=3
    console.log(222,url.parse(req.url).pathname);  //---/sum
    console.log(333,url.parse(req.url).query);     //---a=1&b=2&c=3
    console.log(444,url.parse(req.url,true).query);//---{ a: '1', b: '2', c: '3' }
    res.end();
}).listen("80",function(){
    console.log(555,"开启成功"); 
})

