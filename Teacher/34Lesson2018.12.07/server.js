const path=require("path");
// 可以通过path来管理你的路径。
// console.log(__dirname);// 当前所在的目录
// console.log(__dirname+"/dist");
// console.log(path.join(__dirname,"121212"));// 单纯的进行拼接    E:\1813\Lession34\121212
// console.log(path.join(__dirname,"./121212"));// 单纯的进行拼接    E:\1813\Lession34\121212
// console.log(path.join(__dirname,"/121212"));// 单纯的进行拼接    E:\1813\Lession34\121212


console.log(path.resolve(__dirname,"121212"));
console.log(path.resolve(__dirname,"./121212"));
console.log(path.resolve(__dirname,"/121212"));