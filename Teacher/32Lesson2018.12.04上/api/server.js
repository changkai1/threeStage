const express=require("express");
const db=require("./modules/db");
const bodyParser=require("body-parser");
const app=express();
// app.use(bodyParser.urlencoded({
//     extended:false
// }));
app.use(bodyParser.json());
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    // res.header("Access-Control-Allow-Methods","POST,OPTIONS");
    res.header("Access-Control-Allow-Headers","content-type");
    res.header("Access-Control-Allow-Methods","DELETE,PUT");
    next();
})
app.post("/post",function(req,res){
    console.log(req.body);
    res.end();
})
app.get("/weibo",function(req,res){

    db.count("contextList",{},function(count){
        var pageIndex=req.query.pageIndex/1;
        var pageNum=500;
        var pageSum=Math.ceil(count/500);
        if(pageSum<1)
            pageSum=1;
        if(pageIndex>pageSum)
            pageIndex=pageSum;
        if(pageIndex<1)
            pageIndex=1;
        db.find("contextList",{
                limitNum:pageNum,
                skipNum:(pageIndex-1)*pageNum,
                sortObj:{addTime:-1}
            },function(err,contextList){
            res.json({
                ok:1,
                contextList,
                pageSum,
                pageIndex
            })
        })
    })

})
app.post("/addweibo",function(req,res){
    db.insertOne("contextList",{
        context:req.body.context,
        topNum:0,
        downNum:0,
        addTime:Date.now()
    },function(err,results){
        res.json({
            ok:1,
            msg:"成功"
        })
    })
})
app.delete("/weibo",function(req,res){
    var id=req.query.id;
    db.deleteOneById("contextList",id,function(err){
        res.json({
            ok:1,
            msg:"成功！"
        })
    })
})
app.put("/weibo",function(req,res){
    var id=req.body.id;
    var type=req.body.type/1; // type=1,顶，2踩
    var upObj={
        topNum:1
    };
    if(type===2){
        upObj={
            downNum:1
        }
    }

    db.updateOneById("contextList",id,{
        $inc:upObj
    },function(err){
        res.json({
            ok:1,
            msg:"成功"
        })
    })
})
app.get("/sum",function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.json({
        ok:1,
        sum:req.query.num/1+req.query.num2/1
    })
})
app.listen(80,function(){
    console.log("success");
})