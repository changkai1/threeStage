// 1、作用域

// 变量提升 指的是变量而不是值
// function fn(){
//     var a=12;
//     console.log(a);
//     function fn2(){
//         console.log(a);
//         var a=7;
//     }
//     fn2();
// }
// fn();

// var a=7;
// function fn(a){
//     console.log(a);//  7
//     a+=1;
// }
// fn(a);
// console.log(a);//

//作用域链
// var a=1;
// function fn(){
//     var a=2;
//     console.log(a);
//     function fn2(){
//         // var a=3;
//         console.log(a);
//     }
//     fn2();
// }
// fn();



// 2、值类型，引用类型

// var a=1;
// var b=a;
// b=2;
// console.log(a,b);

// var obj={
//     username:"刘俊一",
//     run(){
//         console.log("要跑");
//     }
// }
//
// var obj2=obj;
// var obj3=obj;
// obj2.username="俊俊";
// console.log(obj.username);
// console.log(obj3.username);

// 你在构造函数当中定义的属性和方法。在原型当中也可以定义属性和方法
// 构造函数体内的称为实例对象，原型对象。
function Box(){
    this.userName="";
}
var box=new Box();
// 3、变量提升4、如何的定义一个类5、回调函数，6、ajax sass less
