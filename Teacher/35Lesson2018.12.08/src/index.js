// import "./css/my.css"
import myImg from "./image/timg.jpg"

var img=new Image();
img.src=myImg;
img.onload=function(){
    document.body.appendChild(img);
}
console.log("index.js");