function Tag(options){
    this.btns=document.querySelectorAll(options.el+" input");
    this.divs=document.querySelectorAll(options.el+" div");
    this.index=options.index;
    this.colorArr=options.colorArr;
    this.init();
}

Tag.prototype.init=function(){
    this.hide();
    this.show();
    for(let i=0;i<this.btns.length;i++){
        this.btns[i].onclick=()=>{
            this.index=i;
            this.hide();
            this.show();
        }
    }
}
// 将所有的DIV隐藏，将所有的按钮去掉背景色
Tag.prototype.hide=function(){
    for(var i=0;i<this.btns.length;i++){
        this.btns[i].style.background=null;
        this.divs[i].style.display="none";
    }
}
Tag.prototype.show=function(){
    this.btns[this.index].style.background=this.divs[this.index].style.background=this.colorArr[this.index];
    // this.btns[this.index].style.background=this.colorArr[this.index];
    // this.divs[this.index].style.background=this.colorArr[this.index];
    this.divs[this.index].style.display="block";
}