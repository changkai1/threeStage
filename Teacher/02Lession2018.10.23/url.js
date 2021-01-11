const url=require("url");
//
var str="http://username:123456@www.youxi.com:80/newslist/detail?id=1&type=2#one";
console.log(url.parse(str));