const express=require("express");
// ejs
const ejs=require("ejs");
const db=require("./modules/db");
const app=express();
app.set("view engine","ejs");
var newList=[
    {
        newTitle:"新版《天龙八部》女主角坠马，剧组淡化事件称她只是软组织损伤",
        id:Date.now(),
        newType:"娱乐",
        context:"11月4日，微博大V发布消息称“演员何泓姗拍戏时直接从疯马上甩了下来”，当场全身不能动弹，现在已经被紧急送到医院了！"
    },
    {
        newTitle:"伊朗千城游行反对美国制裁 德黑兰高喊“美国去死”",
        id:Date.now()-100000,
        newType:"军事",
        context:"【环球时报综合报道】美国对伊朗的经济制裁美东时间11月4日午夜全面生效，这场混杂了经济战、外交战与心理战的对抗陡然升级。新的制裁主要瞄准伊朗的能源、金融等部门，特朗普政府试图以榨干德黑兰钱包的方式迫使其放弃核导计划、改变在中东地区美国所不喜欢的行为，比如支持叙利亚的巴沙尔政府。其实，2015年7月，伊朗与伊核问题六国(美国、英国、法国、俄罗斯、中国和德国)达成伊核问题全面协议，但因为特朗普不喜欢这个协议，因此宣布退出，要求重新谈判。"
    }
]
app.get("/",function(req,res){
    res.render("newList",{
        newList,
        title:"新闻首页"
    })
})
app.get("/detail/:id",function(req,res){
    var info=newList.find(v=>v.id===req.params.id/1);
    info.title=info.newTitle;
    res.render("detail",info);
})
app.listen(80,function(){
    console.log("success");
})