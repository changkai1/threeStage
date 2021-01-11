// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'  //核心 库
import App from './App' // 引入外部组件

import Weibo from "./Weibo"

import router from './router'
import plugin from "@/components/plugin"
import vueResource from "vue-resource"
import Bus from "@/Bus"

Vue.config.productionTip = false
// 要在写在实例的前面
// Vue.use(plugin,"asdf","345354");
Vue.use(vueResource);
// Vue.prototype.$bus=Bus;

Vue.use(Bus);

// // 进入路由之前
// router.beforeEach((to,from,next)=>{
//         next();
// })
/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  components: { App,Weibo },
    // render
  template: '<Weibo/>',
    mounted(){
      console.log(this.$http.get());
    }
})
