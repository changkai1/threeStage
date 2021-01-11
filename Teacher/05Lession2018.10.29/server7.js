const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.json());
app.use(express.static("./html"));
// app.get("*")
app.all("*",function(req,res,next){
    console.log(11111111);
    // token
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","content-type")
    next();
})
app.post("/reg",function(req,res){
    console.log(req.body);
    res.json({
        ok:1,
        msg:"oye"
    })

})
app.listen(80,function(){
    console.log("success");
})