// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'   // 导入VUE核心库
import App from './App'  // 导入APP组件   组件的扩展名为.vue 扩展名可以省略
import router from './router'  // 导入的路由  .js   router是个文件夹，默认导入该文件夹下的index.js

// 是否在生产环境当中给予提示。
Vue.config.productionTip = false

/* eslint-disable no-new */
// 实例化Vue对象
new Vue({
  el: '#app',
  router,
  components: { App },// 局部组件
  template: '<App/>'// 模板
})
