export default{
    // 当通过Vue.use来使用该插件时会默认执行install方法
    install(Vue,str1,str2){ // 接收一个参数Vue实例
        Vue.prototype.$http = {
            get(){
                console.log("你调用的了get方法")
            }
        }
        Vue.component("loading",{ //vue的全局组件
            template:`<div>加载中</div>`
        })
        console.log("lalallaal");
        console.log(str1,str2)
    }
}