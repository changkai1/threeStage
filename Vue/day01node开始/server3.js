//在文件写入信息
const fs = require("fs");
fs.writeFile("./my.txt","黎明",{flag:'a'},function(err){  //插入
    
    console.log(err,"写入成功");
})













