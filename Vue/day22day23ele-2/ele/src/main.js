// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入登录
import Login from './Login'
import router from './router'
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入axios
import axios from "axios"
// 引入store
import store from "@/vuex"
import study from "./study"
import filters from "./filters"
// axios定义在原型上，就不需要在每个页面引入
Vue.prototype.$ajax = axios;

// 遍历filters
for(var key in filters){
    Vue.filter(key,filters[key]);
}

Vue.use(ElementUI);

// router.beforeEach((to,from,next)=>{
//    if(to.path == "/shopType"){
//       next({path:"/shopManage"})
//    }else{
//      next()
//    }
    
// })


// axios拦截器，将所有的axios请求拦截下来
// 1.请求拦截
axios.interceptors.request.use((config)=>{
  config.url = "http://127.0.0.1" + config.url;

  // 使用反向代理
  // if( !config.url.includes("/douban") ){
  //     config.url = "/ele" + config.url;
  // }
  // console.log(config);

  // config.url = "/ele" + config.url;
  return config;
});

// 2.响应拦截
axios.interceptors.response.use((data)=>{
  // 这里返回的东西，就是axios调取接口返回的东西
  // return "喝红牛！"
  return data; //返回data,就是原样返回
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // mounted(){
  //     this.$ajax.get("/douban/movie/top250?start=0&count=10").then(({data})=>{
  //         console.log(111,data);
  //     })
  // },
  components: { App , Login,study},
  // template: '<Login/>'
  // template: '<study/>'
  // 根据localStrong是否有adminId判断用哪个模板
  template:`
    <components :is="$store.state.admin.adminId ? 'App' : 'Login'" />
  `
})
