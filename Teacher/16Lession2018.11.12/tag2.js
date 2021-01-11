class Tag{
    constructor(options){
        this.btns=document.querySelectorAll(options.el+" input");
        this.divs=document.querySelectorAll(options.el+" div");
        this.index=options.index;
        this.colorArr=options.colorArr;
        this.init();
    }
    init(){
        this.hide();
        this.show();
        for(let i=0;i<this.btns.length;i++){
            this.btns[i].onclick=(e)=>{
                this.index=i;
                this.hide();
                this.show();
                e.cancelBubble=true;
            }
        }
    }
// 将所有的DIV隐藏，将所有的按钮去掉背景色
    hide(){
        for(var i=0;i<this.btns.length;i++){
            this.btns[i].style.background=null;
            this.divs[i].style.display="none";
        }
    }
    show(){
        this.btns[this.index].style.background=this.divs[this.index].style.background=this.colorArr[this.index];
        // this.btns[this.index].style.background=this.colorArr[this.index];
        // this.divs[this.index].style.background=this.colorArr[this.index];
        this.divs[this.index].style.display="block";
    }
}
class strongTag extends Tag{
    constructor(options){
        super(options);
        this.bodyTag();
        this.autoTag(options.s);
    }
    bodyTag(){
        document.body.onclick=()=>{
            this.index++;
            if(this.index>this.colorArr.length-1){
                this.index=0;
            }
            this.hide();
            this.show();
        }
    }
    autoTag(s){
        setInterval(()=>{
            this.index++;
            if(this.index>this.colorArr.length-1){
                this.index=0;
            }
            this.hide();
            this.show();
        },s*1000)

    }
}