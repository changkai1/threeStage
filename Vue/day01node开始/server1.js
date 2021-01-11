/*
1、内置模块：自身拥有不需要下载
2、通过cnpm下载的第三方模块
3、自己写的模块
*/ 


// 创建一个服务

const http = require("http");
// 创建http服务  request请求对象  response响应对象
http.createServer(function(request,response){
    // 1.响应的头部信息设置:第一个参数是状态码。第二个参数是一个对象
    response.writeHead(200,{
        // 4.text/html：可以解析html  text/plain：纯文本格式
        "content-type":"text/html;charset=utf-8"
        // "content-type":"text/plain;charset=utf-8"
    });

    //2.响应结束 response.end(只允许写字符串和Buffer)
    // response.end("hehe1212131313");
    // response.end("我是一只只小鸟");
    response.end("<a href='http://www.baidu.com'>百度</a>");

    //3.listen参数(端口号，指定的IP，回调函数：当服务开启后调用该函数)
}).listen(8081,"127.0.0.1",function(){
    console.log("开启成功");
});








