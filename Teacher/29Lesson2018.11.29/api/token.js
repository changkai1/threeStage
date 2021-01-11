// token 令牌
/*
* 1、登陆时接口生成令牌，并将令牌进行返回
* 2、将令牌进行存储。
* 3、当你访问拥有权限的接口时，将令牌放到你的headers内
* 4、后台接收到后会对你的令牌进行验证，验证成功继承，失败返回错误信息。
* 依赖一个模块  jwt-simple   jwt-->json web token
* */
const jwt=require("jwt-simple");
/*生成令牌
* 验证令牌*/
// 生成令牌 ,第一个参数是你荷 载的内容,第二个参数是密钥 key
var key="@!#@$#@#%#$%1212"
const token=jwt.encode({
    phoneId:"121212",
    id:"121212",
    exp:Date.now()+10*60*1000
},key);
console.log(token);
// 验证,解析你的令牌
console.log(jwt.decode(token,key));
(function(){
    return {
        get(obj){
            var params=obj.params;
            var 
        },
    }
})();

axios.get({
    params:{

    }
})


