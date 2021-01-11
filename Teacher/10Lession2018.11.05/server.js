const express=require("express");
// ejs
const ejs=require("ejs");
const db=require("./modules/db");
const app=express();
app.set("view engine","ejs");
app.get("/",function(req,res){

    db.find("advList",{
        sort:{
            orderBy:-1,
            addTime:-1
        }
    },function(err,advList){
        // res.end("ok");
        res.render("index",{
            advList,
            userName:"xixihahalala"
        });
    })

})
app.listen(80,function(){
    console.log("success");
})