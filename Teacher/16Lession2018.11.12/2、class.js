// var box=new Box();
// console.log(box.userName);
// class 不会对变量进行提升。

// class 类  1、不需要用逗号分隔，2，不需要用function
class Box{
    constructor(){
        // 构造器
        this.userName="haha"
    }
    run(){
        console.log(this.userName)
    }
}
var obj=new Box();
// console.log(obj.userName);
// console.log(obj.hasOwnProperty("userName"));
// console.log(obj.hasOwnProperty("run"));
// console.log("run" in obj);
obj.run();//haha
obj.__proto__.userName="国良";
obj.__proto__.run();// haha


// var box=new Box();
// console.log(box.userName);