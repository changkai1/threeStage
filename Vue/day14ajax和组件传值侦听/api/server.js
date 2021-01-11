const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.json());
app.use(express.static("../"));
app.all("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","content-type")
    next();
})
app.post("/addweibo",function(req,res){
    console.log(req.body);
    res.json({
        ok:100000
    });
});
app.listen(80,function(){
    console.log("success");
})