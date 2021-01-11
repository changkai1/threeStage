const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(express.static("./html"));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))
app.post("/login",function(req,res){
    console.log(req.body);
    // res.status(404).end("over");
    res.end("over");
})
app.listen(80,function(){
    console.log("success");
})