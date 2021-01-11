/*!
 * Feng.js v0.0.1
 * (c) 2018-2018 Qian Feng
 * Released under the MIT License.
 */
/*
* 1、观察者(监视器)：observer------》当数据发生变化时，负责对数据进行劫持，然后将消息（数据变化以后的结果）告诉订阅者
* 2、订阅者（watcher）：负责接收变化的数据，然后将view与model进行同步。（将最新的数据展示到view层）
* 3、编译器 (compile):负责将你的 view当中的指令进行解析，然后初始化你的数据模板，并生成订阅者*/
//实践一把
function Feng(option){
    this.$el=document.querySelector(option.el);
    this.$data=option.data;
    this.$methods=option.methods;
    this.binding={};// 保存你的订阅者{str;[订阅者]}
    this.observer();
    this.compile(this.$el);
}

Feng.prototype.compile=function(el){
    var nodes=el.children;
    // 对子元素进行遍历递归
    for(var i=0;i<nodes.length;i++){
        var node=nodes[i]// 得到具体的节点
        if(node.children.length>0)// 判断是否拥有子节点
            this.compile(node);
        // 指令
        //判断是否拥有f-on指令
        if(node.hasAttribute("f-on:click")){
            var attrVal=node.getAttribute("f-on:click");// 获得指令的值 fn
            node.addEventListener("click",this.$methods[attrVal].bind(this.$data));
        }
        if(node.hasAttribute("f-model") && node.tagName==="INPUT"){
            var attrVal=node.getAttribute("f-model");
            var _this=this;
            // 当你的元素需要进行双向绑定的话就给该元素生成一个订阅者
            this.binding[attrVal].push(new Watcher(node,"value",this,attrVal));// 生成订阅者
            node.addEventListener("input",function(){
                _this.$data[attrVal]=this.value;
            })

            // node.addEventListener("input",((i)=>{
            //     return ()=>{
            //         console.log(this);
            //         this.$data[attrVal]=nodes[i].value;
            //     }
            // })(i))
        }
        if(node.hasAttribute("f-text")){
            var attrVal=node.getAttribute("f-text");
            this.binding[attrVal].push(new Watcher(node,"innerText",this,attrVal));
        }
        if(node.hasAttribute("f-html")){
            var attrVal=node.getAttribute("f-html");// 属性值
            this.binding[attrVal].push(new Watcher(node,"innerHTML",this,attrVal))
        }

    }
}
// 生成一个观察者
Feng.prototype.observer=function(){
    var value="";// 初始值
    // 将数据进行遍历
    for(var key in this.$data){
        // 对数据进行劫持
        this.binding[key]=[];
        var binding=this.binding[key];// 获得该数据下的所有订阅者
        value=this.$data[key];
        Object.defineProperty(this.$data,key,{
            get(){
                return value;
            },
            set(v){
                if(v !== value){
                    value=v;

                    // 得到消息啦，通知订阅者。 和拦截下来的数据相关的订阅者
                    binding.forEach(watcher=>{
                        watcher.update();
                    })
                }
            }
        })
    }
}
// 订阅者 更新视图层
function Watcher(el,attr,vm,val){
    this.el=el;// 更新的标签元素
    this.attr=attr;// 更新标签的属性
    this.vm=vm;// vm实例Feng
    this.val=val;// val 实例data当中的属性名
    this.update();
}
Watcher.prototype.update=function(){
    this.el[this.attr]=this.vm.$data[this.val];
}