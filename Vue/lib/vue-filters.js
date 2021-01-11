// 过滤钱的符号
Vue.filter("currency",function(v,obj){
    var obj = obj || {};
    obj.num = obj.num || 2;
    obj.type = obj.type || "$";
    return obj.type+v.toFixed(obj.num);
})
// 时间过滤器
Vue.filter("date",function(v){
    var now = new Date(v);
    var y = now.getFullYear();
    var m = (now.getMonth()+1).toString().padStart(2,"0");
    var d = (now.getDate()).toString().padStart(2,"0");
    var h = (now.getHours()).toString().padStart(2,"0");
    var min = (now.getMinutes()).toString().padStart(2,"0");
    var s = (now.getSeconds()).toString().padStart(2,"0");
    return y+"-"+m+"-"+d+" "+h+":"+min+":"+s;
})