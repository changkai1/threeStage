// 写一些接口
const http=require("http");
const url=require("url");
const fs=require("fs");
function getNowTime(){
    var date=new Date();
    return (date.getFullYear()
        +"-"+(date.getMonth()+1).toString().padStart(2,"0")
        +"-"+date.getDate().toString().padStart(2,"0")
        +" "+date.getHours().toString().padStart(2,"0")
        +":"+date.getMinutes().toString().padStart(2,"0")
        +":"+date.getSeconds().toString().padStart(2,"0"));
}
http.createServer(function(req,res){
    /*思路：添加微博。
    * 1、创建一个addweibo接口，路径写好。
    * 2、接收参数context
    * 3、将数据写入到json文件当中
    *    1、将数据拿出来
    *    2、将数据进行增加
    *    3、将数据放回去
    * 4、返回结果*/
    var pathname=url.parse(req.url).pathname;
    var query=url.parse(req.url,true).query;
    //确定你的访问地址是addweibo
    if(pathname=="/addweibo"){
        // 接收微博内容。
        var context=url.parse(req.url,true).query.context;
        fs.readFile("./data.json",function(err,results){
            var arr=JSON.parse(results.toString());

            var index=-1;
            for(var i=0;i<arr.length;i++){
                if(arr[i].context==context){
                    index=i;
                    break;
                }
            }
            if(index<0){
                arr.unshift({
                    id:new Date().getTime(),
                    context,
                    topNum:0,
                    downNum:0,
                    addTime:getNowTime()
                });
                fs.writeFile("./data.json",JSON.stringify(arr),function(err){
                    if(err)
                        res.end(url.parse(req.url,true).query.cb+"("+JSON.stringify({
                            ok:2,
                            msg:"网络连接错误"
                        })+");")
                    else
                        res.end(url.parse(req.url,true).query.cb+"("+JSON.stringify({
                            ok:1,
                            msg:"添加微博成功"
                        })+");")
                })
            }else{
                res.end(url.parse(req.url,true).query.cb+"("+JSON.stringify({
                    ok:2,
                    msg:"请不要输入重复的内容"
                })+");")
            }


        })
    }
    else if(pathname=="/getweibo"){
        fs.readFile("./data.json",function(err,results){
            if(err)
                res.end(query.cb+"("+JSON.stringify({
                    ok:2,
                    msg:'网络连接错误'
                })+")")
            else
                res.end(query.cb+"("+JSON.stringify({
                    ok:1,
                    contextList:JSON.parse(results)
                })+")")
        })
    }
    else{
        res.end("404");
    }
}).listen(80,function(){
    console.log("开启成功！")
})