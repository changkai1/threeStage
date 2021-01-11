// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from "axios";
Vue.use(MintUI);

Vue.config.productionTip = false
axios.interceptors.request.use((config)=>{
    config.headers.authorization="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZUlkIjoiMTIxMjEyIiwiZXhwIjoxNTQzNDg5NTY4NTE5fQ.FvqMiahBl96LVQ9pIz7FcEDtRkrUxQk36oFX3UOieTo"
    return config;
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
