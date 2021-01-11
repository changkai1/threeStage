var http=require("http");
var https=require("https");
var express=require("express");
var app=express();
var request=require("request");
var fs=require("fs");
var httpServer=http.createServer(app);
var httpsServer=https.createServer({
    key:fs.readFileSync("./key/weixin.key"),
    cert:fs.readFileSync("./key/weixin.crt")
},app);
app.get("/movie",function (req,res) {
    var pageIndex=req.query.pageIndex;
    var pageNum=25;
    var skipNum=(pageIndex-1)*pageNum;

    request.get("https://douban.uieee.com/v2/movie/top250?start="+skipNum+"&count="+pageNum,function (err,response,body) {
        var results=JSON.parse(body);
        if(pageIndex/1>=2){
            results.isOver=true;
        }else{
            results.isOver=false;
        }
        res.json(results);
    })
})
app.get("/",function (req,res) {
    res.json({
        ok:1
    })
});
httpsServer.listen(443,function () {
    console.log("https success");
})
httpServer.listen(80,function () {
    console.log("http success");
})