const fs=require("fs");
module.exports.readIndex=function(res){
    fs.readFile("../html/index.html",function(err,results){
        res.end(results);
    })
}