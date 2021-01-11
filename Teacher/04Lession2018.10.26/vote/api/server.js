const  http=require("http");
const url=require("url");
const common=require("./module/common");
const readManage=require("./module/readManage");
const vote=require("./module/vote");
http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    // console.log(req.method);//
    if(req.method==="POST"){
        // 添加被投票人信息
        if(pathname==="/addVoteList")
           vote.addVoteList(req,res);
    }
    else{
        if(pathname==="/index.html")
            readManage.readManageIndex(res);
        else if(pathname==="/getVoteList")
            vote.getVoteList(res);
        else if(pathname==="/js/baiduTemplate.js")
           readManage.readBaiduTemplate(res);
        else if(pathname.includes(".jpg"))
            readManage.readPic(res,pathname);
        else{
            res.end("您找的页面去火星啦！");
        }
    }

}).listen(80,function(){
    console.log("开启成功")
})