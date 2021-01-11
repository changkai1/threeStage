class Box{
    constructor(str){
        this.userName=str;
    }
}
class Desk extends Box{
    constructor(str){
        super(12);
        this.age=90;
    }
}
var desk=new Desk("好帅");
console.log(desk.userName,desk.age);