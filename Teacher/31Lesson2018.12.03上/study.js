var obj={
    a:1,
    b:2,
    arr:[1,2,3]
}
var obj2={
    c:3,
    d:4
}

var obj3={
    arr:[...obj.arr],
    ...obj,
    ...obj2,
    f:13,
};
console.log(obj.arr===obj3.arr);
// console.log(obj3);
//
//
//
//
// var arr=[1,2,3,4];
// var arr2=[...arr];
// console.log(arr2===arr);







// console.log(obj===obj3);
// console.log(obj.arr===obj3.arr);
