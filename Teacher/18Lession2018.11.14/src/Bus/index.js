// import Vue from "vue";
// console.log(99999);
// export default new Vue();


export default {
    install(Vue){
        Vue.prototype.$bus=new Vue();
    }
}
