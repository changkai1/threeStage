module.exports={
    mode:"development",
    entry:{
        index:"./src/index.js",
        index1:"./src/index1.js"
    },
    output:{
        path:__dirname+"/dist",
        filename:"[name].js"// name指的是入口对象的属性。
    }
}