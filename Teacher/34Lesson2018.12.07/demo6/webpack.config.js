const HtmlWebpackPlugin=require("html-webpack-plugin");
const path=require("path");
module.exports={
    entry:"./src/index",
    output:{
        filename:"bundle.js"
    },
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),// 指定站点的目录
        host:"localhost",// 地址
        port:8090,// 8090   http://localhost:8090
        // open:true,//是否自动打开浏览器。
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        })
    ]
}