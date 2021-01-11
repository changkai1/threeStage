const  http=require("http");
const url=require("url");
const fs=require("fs");
// const myquerystring=require("./module/querystring");
const querystring=require("querystring");
const common=require("./module/common");
const readManage=require("./module/readManage");
http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    // console.log(req.method);//
    if(req.method==="POST"){
        // 添加被投票人信息
        if(pathname==="/addVoteList"){

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
    }
    else{
        if(pathname==="/index.html"){
            fs.readFile("../manage/index.html",function(err,results){
                res.end(results);
            })
        }
        else if(pathname==="/getVoteList"){
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
        else if(pathname==="/addVoteList"){
            res.end("lalalala");
        }
        else if(pathname==="/js/baiduTemplate.js"){
            fs.readFile("../manage/js/baiduTemplate.js",function(err,results){
                res.end(results);
            })
        }
        else if(pathname.includes(".jpg")){
            fs.readFile("./pic"+pathname,function(err,results){
                res.end(results);
            })///golf55.jpg
        }
        else{
            res.end("您找的页面去火星啦！");
        }
    }

}).listen(80,function(){
    console.log("开启成功")
})