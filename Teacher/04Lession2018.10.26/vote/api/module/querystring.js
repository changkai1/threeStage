// 接收一个urlencode  a=1&b=2
module.exports.parse=function(str){
    // {a:1,b:2}
    var arr=str.split("&");//["a=1","b=2"];
    var obj={};
    for(var i=0;i<arr.length;i++){
        var arr2=arr[i].split("=");// ["a","1"]
        obj[arr2[0]]=arr2[1];// obj["a"]=1;
    }
    return obj;
}