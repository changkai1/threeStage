const express=require("express");
const bodyParser=require("body-parser");
const common=require("./modules/common");
const db=require("./modules/db");
const app=express();
app.use(express.static("./weibo"));
app.use(bodyParser.json());
// 添加微博信息
app.post("/addWeibo",function(req,res){
    db.insertOne("contextList",{
        context:req.body.context,
        topNum:0,
        downNum:0,
        addTime:common.getNowTime()
    },function(err,results){
        if(err)
            res.json({
                ok:2,
                msg:"网络连接错误"
            })
        else
            res.json({
                ok:1,
                msg:"提交成功！"
            })
    })
});
// 获取微博信息
app.get("/getWeibo",function(req,res){
    // 分页
    var pageIndex=req.query.pageIndex/1;//当前页
    var pageSum=1;// 总页数
    var pageNum=5;// 每页显示的条数
    db.count("contextList",{},function(count){
        pageSum=Math.ceil(count/pageNum);
        if(pageSum<1)
            pageSum=1;
        if(pageIndex>pageSum)
            pageIndex=pageSum;
        if(pageIndex<1)
            pageIndex=1;
        db.find("contextList",{
            sortObj:{addTime:-1},
            skipNum:(pageIndex-1)*pageNum,
            limitNum:pageNum
        },function(err,contextList){
            res.json({
                ok:1,
                contextList,
                pageSum,// 总页数
                pageIndex// 当前页
            })
        })
    })











});
// 删除微博
app.get("/deleteWeibo",function(req,res){
    db.deleteOneById("contextList",req.query.id,function(err,results){
        res.json({
            ok:1,
            msg:"成功"
        })
    })
});
// 顶与踩
app.get("/upWeibo",function(req,res){
    var id=req.query.id;
    var type=req.query.type/1;// 1顶，2 踩
    // var obj={};
    // if(type===1){
    //     obj={
    //         $inc:{
    //             topNum:1
    //         }
    //     }
    // }else{
    //     obj={
    //         $inc:{
    //             downNum:1
    //         }
    //     }
    // }
    var obj={
        $inc:{}
    }
    if(type===1){
        obj.$inc.topNum=1;
    }else{
        obj.$inc.downNum=1;
    }
    db.updateOneById("contextList",id,obj,function(err,results){
        res.json({
            ok:1,
            msg:"成功"
        })
    })
})
app.listen(80,"127.0.0.1",function(){
    console.log("success");
})