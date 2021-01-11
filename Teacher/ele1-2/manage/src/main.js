// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import Login from "./Login"
import axios from "axios";
import store from "./vuex";
import study from "./study"
import filters from "@/filters"
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$ajax=axios;


for(var key in filters){
    Vue.filter(key,filters[key]);
}


axios.interceptors.request.use((config)=>{
    config.url="http://127.0.0.1"+config.url;
    return config;
})


axios.interceptors.response.use(({data})=>{
    return data;
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
    store,
  components: { App,Login,study },
  template: `
<!--<components :is="$store.state.admin.adminId?'App':'Login'"/>-->
<components is="study"/>
`
})
