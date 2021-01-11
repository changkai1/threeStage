module.exports={
    mode:"development",
    entry:["./src/index.js","./src/index1.js"],
    output:{
        path:__dirname+"/dist",
        filename:"bundle.js"
    }
}