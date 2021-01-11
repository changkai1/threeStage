const db=require("./modules/db");
db.count("contextList",{},function(count){
    console.log(count);
})





// 对象分为二种 1、普通对象 2、函数对象
// var fn=function(num){
//     console.log(num);
// }
// function fn2(cb){
//     console.log(cb===fn);
//     cb(45);
// }
// fn2(fn);
//


// function fn(){
//
// }
// fn.userName="xixi";
// fn.run=function(){
//     console.log("lalala");
// }
//
//
// console.log(fn.userName);
// fn.run();
// var obj={};
// console.log(typeof obj);
// function fn(){
//
// }
// console.log(typeof fn);