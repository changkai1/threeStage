const md5=require("md5");
console.log(md5("1@#$%90asdASDF3456"));
//
const pwd="123456"
// 盐料
console.log(md5(pwd+"@!Ele.Com"));
