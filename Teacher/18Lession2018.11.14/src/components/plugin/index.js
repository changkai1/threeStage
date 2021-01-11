export default {
    // 当你通过Vue.use来使用该插件时会默认执行install方法
    install(Vue,str,str2){
        console.log(str,str2);
        Vue.prototype.$http={
            get(){
                console.log("你调用 了get方法")
            }
        }
        Vue.component("loading",{
            template:`
                <div>加载中</div>
            `
        })
        console.log("lalalalalallalaalalal")
    }
}
