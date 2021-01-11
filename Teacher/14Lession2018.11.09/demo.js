var obj={
    a:1
}
var obj2={
    b:2,
    a:3
}
// Object.assign(目标对象，其它的是源对象)
var obj3=Object.assign(obj,obj2);// 将obj2合并到obj当中，然后将obj作为返回值赋值给obj3
console.log(obj3);
console.log(obj===obj3);// true
console.log(obj===obj2);// false
console.log(obj);