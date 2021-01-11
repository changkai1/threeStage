const express=require("express");
const app=express();
app.get("/user",function(req,res){
    console.log(req.query);
    // 可以作为输出。
    // res.write(";alskdjf;laksdjf;laskd");
    // res.end("user2");
    res.json({
        userName:"lalala",
        age:12
    })
})

app.listen(80,function(){
    console.log("success");
})
