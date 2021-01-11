// 1.作用域
// function fn(){
//     var a = 12;
//     console.log(a); //12
//     function fn2(){
//         console.log(a); //undefined
//         var a;
//     }
//     fn2();
// }
// fn();

// var b = 1;
// function fn3(){
//     var a = 2;
//     console.log(a); // 2
//     function fn4(){
//         console.log(a); //2
//     }
//     fn4();
// }
// fn3();

//2. 值类型  引用类型
// var a = 1;
// var b = a;
// b = 2;
// console.log(a,b); // 1 2

var obj = {
    username:"hehe",
    run(){
        console.log("跑步")
    }
}
var obj2 = obj;
var obj3 = obj;
obj2.username = "haha";
console.log(obj.username);  // haha
console.log(obj3.username); // haha








