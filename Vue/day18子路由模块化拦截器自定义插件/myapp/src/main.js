// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入微博
import Weibo from './Weibo'

import router from './router'
// 引入vue-resource
import vueResource from 'vue-resource'

// 引入自定义的插件
import plugin from '@/components/plugin'

// 1.外部引入bus
// import Bus from "@/Bus"
// Bus定义在vue的原型上,所有的组件都可以使用
// Vue.prototype.$bus = Bus;

// 2.引入自定义插件里的bus，使用自定义插件
import Bus from "@/Bus"
Vue.use(Bus);

Vue.config.productionTip = false

// 1.使用引入的插件，会默认执行插件里的方法,输出lalala,还可以传值
// Vue.use(plugin,"11111","22222"); 

// 2.使用vueResource
Vue.use(vueResource);

// 进入所有路由之前
/*
  to:去哪里
  from:从哪里来
*/ 
router.beforeEach((to,from,next)=>{
    next();
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App,Weibo },
  // template: '<Weibo/>',
  template: '<App/>',
  mounted(){
     this.$http.get(); //调用plugin里的get方法
  }
})
