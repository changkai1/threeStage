const http=require("http");
const fs=require("fs");// 对文件进行操作的。
var server=http.createServer(function(req,res){
    console.log(1111111111);
    
    fs.readFile("./server2.html",function(err,results){
        console.log(2222222222);
        res.end(results.toString());
    })

});
server.listen(80)