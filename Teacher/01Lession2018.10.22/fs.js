const fs=require("fs");
// 写入的文件地址，写入的内容，回调函数--》写入完成会调用
fs.writeFile("./my.txt","黎明",{flag:"a"},function(err){
    console.log(err,"写入成功！");
})
// append
// fs.readFile("./my.txt",function(err,reuslts){
//     fs.writeFile("./my.txt",reuslts+"四大名著水浒传",function(err){
//         console.log(err,"写入成功！");
//     })
// })
// fs.writeFile("./my.txt","四大名著水浒传",function(err){
//     console.log(err,"写入成功！");
// })