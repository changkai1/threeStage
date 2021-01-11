const http=require("http");
const url=require("url");
http.createServer(function(req,res){
    res.end(url.parse(req.url,true).query.cb+"(901);");
}).listen(80,function(){
    console.log("开启成功！")
});