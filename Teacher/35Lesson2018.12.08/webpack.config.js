const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const CleanWebpackPlugin=require("clean-webpack-plugin");
module.exports={
    mode:"development",
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    plugins:[
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin(
            {
                template:"./src/index.html",
                // filename
                // hash
                // chunks
            }
        )
    ],
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),
        host:"127.0.0.1",
        port:8090,
        open:true
    },
    module:{
        rules:[
            {
                test:/\.css$/,// 正则.css
                // use:["style-loader","css-loader"]
                // loader:["style-loader","css-loader"]
                use:[
                    {
                        loader:"style-loader"
                    },{
                        loader:"css-loader"
                    }
                ]
            },{
                test:/\.(gif|png|jpg)$/,
                // use:["url-loader"]
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:20000, // 范围 当你的图片大于指定范围时，用图片的文件地址，相返用base64
                            outputPath:"image"// 给你的文件指定目录
                        }
                    }
                ]
            }
        ]
    }
}