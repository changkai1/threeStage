// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入demo,使用demo组件
import demo from "./demo"
// 外部引入vuex
import store from './vuex'

//1. 引入vuex
// import Vuex from 'vuex'
// //2. 使用vuex
// Vue.use(Vuex);
// //3.创建仓库
// var store = new Vuex.Store({
//     state:{
//       userName:"lalala",
//       studyList:[
//           {
//               id:1,
//               title:"php",
//               day:2,
//               loveNum:0
//           },
//           {
//               id:2,
//               title:"node",
//               day:5,
//               loveNum:0
//           },
//           {
//               id:3,
//               title:"vue",
//               day:1,
//               loveNum:0
//           }
//       ]
//     },
//     mutations:{ //修改state数据,同步 函数名大写
//       CHANGE_STUDYLIST_ID(state,id){ //第一个参数:state里的数据，第二个参数:传的值
//           var studyinfo = state.studyList.find(v=>v.id === id);
//           studyinfo.loveNum += 1;
//       }
//     },
//     actions:{

//     },
//     getters:{ //相当于计算属性
//        loveNum(state){
//           var s = 0;
//           state.studyList.forEach(v => {
//               s += v.loveNum;
//           });
//           return s;
//        }
//     }
// })


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //4.把仓库放到实例当中
  store,
  components: { App,demo },
  template: '<demo/>' //使用demo组件
})
