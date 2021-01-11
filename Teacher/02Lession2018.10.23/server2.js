const http=require("http");
const fs=require("fs");
const url=require("url");
http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname.toLowerCase();
    if(pathname=="/"){
        fs.readFile("./form2.html",function(err,results){
            res.end(results);
        })
    }else if(pathname=="/send"){
        console.log(url.parse(req.url,true).query);
        var query=url.parse(req.url,true).query;
        //    { userName: '12', sex: '1', hobby: [ '1', '2' ], jiehun: '1' }
        var queryObj={
            userName:"姓名",
            sex:"性别",
            hobby:"爱好",
            jiehun:"是否已婚",
            sexEnum:{
                "1":"男",
                "2":"女"
            },
            jieHunEnum:{
                "1":"是",
                "2":"否"
            },
            hobbyEnum:{
                "1":"学习",
                "2":"抽烟",
                "3":"喝酒",
                "4":"烫头"
            },
            getValue(key){
                var str=this[key];// sex  姓名
                var queryValue=query[key]; // 12
                if(key=="sex"){
                    queryValue=this.sexEnum[queryValue];
                }else if(key=="jiehun"){
                    queryValue=this.jieHunEnum[queryValue];
                }else if(key=="hobby"){
                    if(queryValue instanceof Array){
                        // [1,2]
                        queryValue= queryValue.map((v)=>{
                            return this.hobbyEnum[v]
                        })
                    }else
                        queryValue=this.hobbyEnum[queryValue];
                }
                return str+":"+queryValue+"\n"

            }
        }
        var str="";
        for(var key in query ){
            // console.log(key,queryObj[key],query[key]);
            str+=queryObj.getValue(key);// userName
            // str+=queryObj[key]+":"+query[key]+"\n";
        }
        str+="**********************************\n"
        fs.writeFile("./data.txt",str,{flag:"a"},function(err){
            res.end(JSON.stringify({
                ok:1,
                msg:"成功"
            }));
        })

    }else{
        res.end("404");
    }

}).listen(80,function(){
    console.log("开启成功！")
});