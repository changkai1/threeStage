var arr=[1,2,3,4,5,6,7,8,9,10,11,12];
//
var num=Math.ceil(arr.length/10);
var shopTypeList=[];
for(var i=0;i<num;i++){
    shopTypeList[i]=[];
    for(var j=i*10;j<i*10+10 && j<arr.length;j++){
        shopTypeList[i].push(arr[j]);
    }
}
console.log(shopTypeList);