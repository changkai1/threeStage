// 将所有与voteList相关的接口放到该模块当中
const fs=require("fs");
const common=require("./common");
const querystring=require("querystring");
module.exports.getVoteList=function(res){
    fs.readFile("./data/voteList.json",function(err,results){
        console.log(11111111111,err);
        res.end(JSON.stringify({
            ok:1,
            voteList:JSON.parse(results),
            voteTypeEnum:{
                "1":"大前端",
                "2":"JAVA",
                "3":"NODE",
                "4":"UI"
            }
        }))
    })
}
module.exports.addVoteList=function(req,res){
    var str="";
    // 事件：开始接收
    req.addListener("data",function(chunk){
        str+=chunk;
    });
    // 数据接收完毕
    req.addListener("end",function(){
        var query=querystring.parse(str);
        query.id=Date.now();
        query.voteType=query.voteType/1;
        query.voteNum=query.voteNum/1;
        query.addTime=common.getNowTime();// 当前时间
        fs.readFile("./data/voteList.json",function(err,reuslts){
            var arr=JSON.parse(reuslts);
            arr.unshift(query);
            fs.writeFile("./data/voteList.json",JSON.stringify(arr),function(err){
                if(err){
                    common.end(res);
                }else{
                    common.end(res,1,"添加成功");
                }
            })
        })

    })
}