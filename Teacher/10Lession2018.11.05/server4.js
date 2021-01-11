const express=require("express");
const request=require("request");
const ejs=require("ejs");
const app=express();
app.set("view engine","ejs");
app.use(express.static("./views"));
app.get("/douban",function(req,res){

     var pageIndex=(req.query.pageIndex || 1)/1;
     var pageNum=10;

     request("https://douban.uieee.com/v2/movie/top250?start="+(pageIndex-1)*pageNum+"&count="+pageNum,function(err,response,body){
         var movieList=JSON.parse(body);// json对象
         var pageSum=Math.ceil(movieList.total/pageNum)// 总页数
         if(pageSum<1)
             pageSum=1;
         if(pageIndex>pageSum)
             pageIndex=pageSum;
         if(pageIndex<1)
             pageIndex=1;
         movieList.pageIndex=pageIndex;
         movieList.pageSum=pageSum;

         res.render("douban",movieList);
     })

    // console.log(11111111111);
    // // https://douban.uieee.com/v2/movie/top250?start=25&count=25
    // res.render("douban",{})
    // // res.json({
    // //     ok:1
    // // })
})
app.get("/movie",function(req,res){
    var pageIndex=req.query.pageIndex/1;
    var pageNum=10;

    request("https://douban.uieee.com/v2/movie/top250?start="+(pageIndex-1)*pageNum+"&count="+pageNum,function(err,response,body){
        if(!err && response.statusCode ===200){
            //body
            var movieList=JSON.parse(body);// json对象
            var pageSum=Math.ceil(movieList.total/pageNum)// 总页数
            if(pageSum<1)
                pageSum=1;
            if(pageIndex>pageSum)
                pageIndex=pageSum;
            if(pageIndex<1)
                pageIndex=1;
            movieList.pageIndex=pageIndex;
            movieList.pageSum=pageSum;
            res.json(movieList);
        }else{
            res.json({
                ok:2,
                msg:"网络连接错误"
            })
        }
    })
})
app.get("/userInfo",function(req,res){
    // 通过NODE发送请求。
    request("http://127.0.0.1:8081/userInfo",function(err,response,body){
        if(!err && response.statusCode===200){
            res.json(
                JSON.parse(body)
            )
        }else{
            res.json({
                ok:2,
                msg:"连接错误！"
            })
        }
    })



    // res.json({
    //     ok:1,
    //     msg:"server4.js"
    // })
})

app.get("/serverInfo",function(req,res){
    // 通过该接口POST提交到 server5的INFO接口
    request({
        method:"post",
        url:"http://127.0.0.1:8081/info",
        headers:{
            "content-type":"application/json"
        },
        body:{a:11,b:12},
        json:true
    },function(err,response,body){
        console.log(body);
        res.end();
    })

    // request({
    //     method:"post",
    //     url:"http://127.0.0.1:8081/info",
    //     headers:{
    //         "content-type":"application/x-www-form-urlencoded"
    //     },
    //     body:"a=1&b=2",
    //     json:true  //得到的数据是json数据
    // },function(err,response,body){
    //     console.log(typeof body);
    //     res.end();
    // })
})




app.listen(80,function(){
    console.log("success");
})