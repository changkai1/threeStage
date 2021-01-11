// 服务
// 引入http模块。
/*
* 1、内置模块：自身拥有不需要下载（cnpm)
* 2、通过cnpm下载的。第三方模块
* 3、自己写的模块。
* 模块：依赖，模组。*/
const http=require("http");
// 创建HTTP服务  news request 请求对象，response响应对象
http.createServer(function(request,response){
    // 响应结束！如果没有结束会一直请求下去！
    // response.end("wo ai ni zhongguo");
    // 响应的头部信息设置：第一个参数是个状态码。第二个参数是一个对象
    response.writeHead(200,{
        //text/html:可以被浏览器解析成HTML
        // "content-type":"text/html;charset=utf-8"
        "content-type":"text/plain;charset=utf-8"
    });
    response.end("<a href='http://www.baidu.com'>百度</a>");
    // response.end("我是一只小小小小鸟！怎么飞也飞不高！安曙很帅！");
    // listen(端口号，指定的IP,回调函数：当服务开启后会调用 该函数）
}).listen(8081,"127.0.0.1",function(){
    console.log("开启服务成功")
})
