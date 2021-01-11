const fs=require("fs");// 对文件进行操作的
console.log(1);
fs.readFile("./server2.html",function(err,results){
    console.log(results.toString());
})
console.log(3);