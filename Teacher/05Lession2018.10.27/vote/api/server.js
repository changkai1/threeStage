const  http=require("http");
const url=require("url");
const common=require("./module/common");
const readManage=require("./module/readManage");
const vote=require("./module/vote");
const readUser=require("./module/readUser");
const fs=require("fs");
const querystring=require("querystring");
http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    var query=url.parse(req.url,true).query;
    // console.log(req.method);//
    if(req.method==="POST"){
        // 添加被投票人信息
        if(pathname==="/addVoteList")
           vote.addVoteList(req,res);
        else if(pathname==="/upVoteList"){
            vote.upVoteList(req,res,query.id/1);
        }
        else if(pathname==="/reg"){
            var str="";
            req.on("data",function(chunk){
                str+=chunk;
            })
            req.on("end",function(){
                var params=querystring.parse(str);
                fs.readFile("./data/user.json",function(err,results){
                    var userArr=JSON.parse(results);
                    var index=userArr.findIndex(v=>v.userName===params.userName);
                    if(index>=0){
                        common.end(res,2,"您的用户名已存在，请重新输入");
                    }else{
                        userArr.unshift({
                            userName:params.userName,
                            passWord:params.passWord,
                            addTime:common.getNowTime(),
                            id:Date.now()
                        });
                        fs.writeFile("./data/user.json",JSON.stringify(userArr),function(err){
                            common.end(res,1,"注册成功");
                        })
                    }
                })
            })
        }
        else if(pathname==="/login"){
            var str="";
            req.on("data",function(chunk){
                str+=chunk;
            })
            req.on("end",function(){
                var params=querystring.parse(str);
                fs.readFile("./data/user.json",function(err,results){
                     var userArr=JSON.parse(results);
                     var index=userArr.findIndex(v=>v.userName===params.userName && v.passWord===params.passWord);
                     if(index<0){
                         common.end(res,2,"用户名或密码错误！")
                     }else{
                         res.end(JSON.stringify({
                             ok:1,
                             userId:userArr[index].id,
                             userName:userArr[index].userName
                         }))
                     }


                })
            })
        }
    }
    else{// GET
        if(pathname==="/index.html")
            readManage.readManageIndex(res);
        else if(pathname==="/getVoteList")
            vote.getVoteList(res,query.type/1,query.keyword);
        else if(pathname==="/js/baiduTemplate.js")
           readManage.readBaiduTemplate(res);
        else if(pathname.includes(".jpg"))
            readManage.readPic(res,pathname);
        else if(pathname==="/getVoteInfoByID"){
            vote.getVoteInfoByID(res,query.id/1);
        }
        // 投票
        else if(pathname==="/sentVote"){
            // id
            fs.readFile("./data/voteList.json",function(err,results){
                var arr=JSON.parse(results);
                var index=arr.findIndex(v=>v.id===query.id/1);
                arr[index].voteNum+=1;
                fs.writeFile("./data/voteList.json",JSON.stringify(arr),function(err){
                    common.end(res,1,"投票成功");
                })
            })
        }
        else if(pathname=="/"){
            readUser.readIndex(res);
        }
        else{
            res.end("您找的页面去火星啦！");
        }
    }

}).listen(80,function(){
    console.log("开启成功")
})