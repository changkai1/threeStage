const path=require("path");// 内置模块
module.exports={
    mode:"development",
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle34.js"
    }
}