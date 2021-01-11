// 读取后台页面的。
var fs=require("fs");
module.exports.readManageIndex=function(res){
    fs.readFile("../manage/index.html",function(err,results){
        res.end(results);
    })
}
// 读取百度模板
module.exports.readBaiduTemplate=function(res){
    fs.readFile("../manage/js/baiduTemplate.js",function(err,results){
        res.end(results);
    })
}
// 读取图片
module.exports.readPic=function(res,pathname){
    fs.readFile("./pic"+pathname,function(err,results){
        res.end(results);
    })///golf55.jpg
}