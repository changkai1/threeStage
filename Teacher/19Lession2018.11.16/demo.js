// function fn(){
//
// }
// fn.userName="laotouzi";
// fn.fn=function(){
//     console.log(this.userName);
// }
// console.log(fn.userName);
// fn.fn();


var arr=[
    {
        user:"zhang"
    },
    {
        user:"li"
    }
]
var obj=arr[1];
console.log(obj);
obj.user="wang";
console.log(obj);
console.log(arr);
