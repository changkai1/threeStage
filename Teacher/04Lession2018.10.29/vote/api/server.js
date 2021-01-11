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
            //  投票
            var userId=query.userId/1;// 用户ID
            var voteId=query.id/1;// 被投票人ID
            // 查找下看看有没有投票记录
            fs.readFile("./data/voteLog.json",function(err,results){
                var logArr=JSON.parse(results);
                var logIndex=logArr.findIndex(v=>v.userId===userId && v.voteId===voteId);
                if(logIndex<0){
                    // 未找到
                    // 1、将被投票人的票数+1
                    // 2、添加投票的记录
                    fs.readFile("./data/voteList.json",function(err,results){
                        var voteArr=JSON.parse(results);
                        var voteIndex=voteArr.findIndex(v=>v.id===voteId);
                        voteArr[voteIndex].voteNum+=1;
                        fs.writeFile("./data/voteList.json",JSON.stringify(voteArr),function(err){
                            logArr.unshift({
                                id:Date.now(),
                                userId,
                                voteId,
                                addTime:Date.now()+24*60*60*1000
                            });
                            fs.writeFile("./data/voteLog.json",JSON.stringify(logArr),function(err){
                                common.end(res,1,"投票成功")
                            })
                        })
                    })
                }else {
                    // 找到了
                    //
                    /*
                    * 1、判断时间是否过期
                    *       1、过期
                    *           1、添加票数
                    *           2、更新时间
                    *       2、未过期
                    *           给予提示*/
                    if(logArr[logIndex].addTime>Date.now()){// 未过期
                        common.end(res,2,"24小时内只能投一票")
                    }else{
                        fs.readFile("./data/voteList.json",function(err,results){
                            var voteArr=JSON.parse(results);
                            var voteIndex=voteArr.findIndex(v=>v.id===voteId);
                            voteArr[voteIndex].voteNum+=1;
                            fs.writeFile("./data/voteList.json",JSON.stringify(voteArr),function(err){
                                logArr[logIndex].addTime=Date.now()+24*60*60*1000;
                                fs.writeFile("./data/voteLog.json",JSON.stringify(logArr),function(err){
                                    common.end(res,1,"投票成功");
                                })
                            })
                        })
                    }


                }
            })










            // fs.readFile("./data/voteList.json",function(err,results){
            //     var arr=JSON.parse(results);
            //     var index=arr.findIndex(v=>v.id===query.id/1);
            //     arr[index].voteNum+=1;
            //     fs.writeFile("./data/voteList.json",JSON.stringify(arr),function(err){
            //         common.end(res,1,"投票成功");
            //     })
            // })
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