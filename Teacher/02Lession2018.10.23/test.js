// var arr=[1,2,3,4,5];
// arr=arr.map(function(v,i){
//     console.log(v,i);
//     return v+2;
// });
// console.log(arr);

// var arr=["hobby=1","hobby==2"];
// //hobby=1&hobby=2
// console.log(arr.join("&"));

// console.log(new Date().getTime());
// console.log(Date.now());
// var str="abc";
// // 字符串的扩展。
// console.log(str.padStart(10,"0"));
// console.log(str.padEnd(10,"1"))
//
// function getNowTime(){
//     var date=new Date();
//     return (date.getFullYear()
//         +"-"+(date.getMonth()+1).toString().padStart(2,"0")
//         +"-"+date.getDate().toString().padStart(2,"0")
//         +" "+date.getHours().toString().padStart(2,"0")
//         +":"+date.getMinutes().toString().padStart(2,"0")
//         +":"+date.getSeconds().toString().padStart(2,"0"));
// }
// console.log(getNowTime())


//
//
// var arr=[1,2,3,4];
// var v=arr.find(function(v,i){
//     // console.log(v,i);
//     return v==3;
// });
// console.log(v);


var arr=[{num:2},{num:3,username:"li"},{num:3,username:"zhao"},{num:5}];
// find找到第一个符合条件的元素,如果找不到是undefined
// var v=arr.find(function(v,i){
//     // console.log(v,i);
//     return v.num==90;
// });
// findIndex是查找数组元素符合条件 的下标的。
var v=arr.findIndex(function(v,i){
    // console.log(v,i);
    return v.num==90;
});
console.log(v);



