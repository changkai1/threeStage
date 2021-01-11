var arr = [1,2,3,4];
var obj = {
    userName:"lala",
    arr
};
var obj2 = {
    userName:"lala",
    arr
};
console.log(obj === obj2) //false
console.log(obj.userName === obj2.userName) //true
console.log(obj.arr === obj2.arr) //true
