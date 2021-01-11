var obj={
    userName:"laowangtou"
}
// 拦截器，对象属性拦截器。劫持器。
//1 你要劫持的对象
//2 你要劫持的对象属性名
//3 描述
var value="";
Object.defineProperty(obj,"userName",{
    get(){// 当你获得值时会执行该方法
        return value;
    },
    set(v){// 当你设置该属性时会执行该方法
        console.log(v);
        value="《"+v+"》";
    }
})
obj.userName="天龙八部";
console.log(obj.userName);
obj.userName="射雕英雄传";






















