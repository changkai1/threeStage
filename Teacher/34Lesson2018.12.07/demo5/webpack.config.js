const HtmlWebpackPlugin=require("html-webpack-plugin");
const CleanWebpackPlugin=require("clean-webpack-plugin");
module.exports={
    entry:{
        index:"./src/index.js",
        index1:"./src/index1.js"
    },
    output:{
        path:__dirname+"/dist",
        filename:"[name].bundle.js"
    },
    plugins:[
        new CleanWebpackPlugin(["dist"]),// 删除操作
        new HtmlWebpackPlugin({
            minify:{//压缩
                collapseWhitespace:true,  //压缩空白
                removeAttributeQuotes:true //删除属性双引号
            },
            template:"./src/test.html",// 指定模板 路径
            filename:"test.html",// 指定生成文件的名称，
            title:"我是一只来自南方的小鸟",// <%= htmlWebpackPlugin.options.title%>来获得值
            arr:[1,2,3,4,5],
            chunks:["index1"]
        }),
        new HtmlWebpackPlugin({
            // minify:{//压缩
            //     collapseWhitespace:true,  //压缩空白
            //     removeAttributeQuotes:true //删除属性双引号
            // },
            hash:true,
            template:"./src/test.html",// 指定模板 路径
            filename:"test1.html",// 指定生成文件的名称，
            title:"我是一只来自北方的狼",// <%= htmlWebpackPlugin.options.title%>来获得值
            arr:[1,2,3,4,5],
            chunks:["index"]
        })
    ]
}

















// const HtmlWebpackPlugin=require("html-webpack-plugin");
// module.exports={
//     entry:"./src/index.js",
//     output:{
//         path:__dirname+"/dist",
//         filename:"bundle.js"
//     },
//     plugins:[
//         new HtmlWebpackPlugin({
//             template:"./src/test.html",// 指定模板 路径
//             filename:"test.html",// 指定生成文件的名称，
//             title:"我是一只来自南方的小鸟",// <%= htmlWebpackPlugin.options.title%>来获得值
//             arr:[1,2,3,4,5]
//         }),
//         new HtmlWebpackPlugin({
//             template:"./src/test.html",// 指定模板 路径
//             filename:"test1.html",// 指定生成文件的名称，
//             title:"我是一只来自北方的狼",// <%= htmlWebpackPlugin.options.title%>来获得值
//             arr:[1,2,3,4,5],
//             chunks:[""]// 指定加载的JS
//         })
//     ]
// }





// const HtmlWebpackPlugin=require("html-webpack-plugin");
// module.exports={
//     entry:"./src/index.js",
//     output:{
//         path:__dirname+"/dist",
//         filename:"bundle.js"
//     },
//     plugins:[
//         new HtmlWebpackPlugin()
//     ]
// }
