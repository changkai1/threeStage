const HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    mode:"development",
    entry:"./src/main.js",
    output:{
        filename:"bundle.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        })
    ],
    devServer:{
        contentBase:__dirname+"/dist",
        host:"127.0.0.1",
        port:8081,
        open:true,
        proxy:{
            "/api":{
                target:"https://douban.uieee.com",
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                query:{// 额外的信息
                    presets:["env","react"]// 使用的规则
                },
                exclude:/node_modules/
            }
        ]
    }

}