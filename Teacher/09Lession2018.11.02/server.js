const fs=require("fs");
var fileName="lala.PNG";
var index=fileName.lastIndexOf(".");
console.log(index);
console.log(fileName.substr(index));

// .jpg .png .gif
var nameArr=[".jpg",".png",".gif"];
if(nameArr.includes(fileName.substr(index).toLowerCase())){
    console.log("success");
}else{
    console.log("error");
}



// fs.rename("./xixi.txt","./up/haha.txt",function(err){
//     console.log(err);
// })
// 重命名
// fs.rename("./lala.txt","./xixi.txt",function(err){
//     console.log(err);
// })
// 删除指定的文件
// fs.unlink("./xixi.txt",function(err){
//     console.log(err);
// })