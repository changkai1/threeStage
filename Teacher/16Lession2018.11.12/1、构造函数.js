/*
* 1、隐匿通过new Object生成一个对象
* 2、改变构造函数内的this指向，指向到刚刚生成的那个对象
* 3、运行你的函数
* 4、隐式返回该对象。*/
// 无 万物之始也。
// function Box(){
//     this.userName="laowangtou";
// }
// Box.prototype.age=12;
// var box=new Box();
// var box2=new Box();
// console.log(box.age);//12
// console.log(box2.age);//12
//
// box.__proto__.age=90;
// console.log(box2.age);//


// console.log(box.__proto__===Box.prototype);
// console.log(Box.prototype.__proto__===Object.prototype)
// console.log(Object.prototype.__proto__);





// console.log(box.age);//12
// console.log(box2.age);//12
// box2.age=89;
// console.log(box.age);//12
// console.log(box2.age);// 89
// console.log(box.__proto__)
// console.log(box2.__proto__);
//
// console.log(box.hasOwnProperty("age"));// true 代表的是在实例对象当中，false代表的是不在实例对象当中
// console.log(box2.hasOwnProperty("age"));// true