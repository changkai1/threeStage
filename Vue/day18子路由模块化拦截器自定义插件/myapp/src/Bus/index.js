//1.定义的公共的Bus
// import Vue from 'vue'
// export default new Vue();

// 2.定义在插件上的bus
export default {
    install(Vue){
        Vue.prototype.$bus = new Vue();
    }
}