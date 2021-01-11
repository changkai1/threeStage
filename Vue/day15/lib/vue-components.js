var red = {
    template:`<div>红色</div>`
};
var yellow = {
    template:`<div>黄色</div>`
};
var blue = {
    template:`<div>蓝色</div>`
};

// 全局组件,第一个参数是组件名，第二个参数是对象，组件
Vue.component("one",{
    data(){ //data必须是一个函数，必须return一个对象
        return{
            str:"不要睡觉，不要说话，不要躺着，不要玩手机"
        }
    },
    props:["username"],
    template:`<div>{{username}}{{str}}</div>`
});
Vue.component("two",{
    template:`<div>two</div>`
})









