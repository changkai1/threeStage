// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from "vuex"
import router from './router'
import Demo from "./Demo"
import store from "./vuex"

Vue.config.productionTip = false
// Vue.use(Vuex);
// const state={
//     userName:"laoli",
//     studyList:[
//         {
//             id:1,
//             title:"php",
//             day:2,
//             loveNum:0
//         },
//         {
//             id:2,
//             title:"node",
//             day:5,
//             loveNum:0
//         },
//         {
//             id:3,
//             title:"vue",
//             day:1,
//             loveNum:0
//         }
//     ]
// }
// const mutations={
//     CHANGE_STUDYLIST_ID(state,id){
//         // var studyinfo=state.studyList.find(v=>v.id===id);
//         // studyinfo.loveNum++;
//         state.studyList.find(v=>v.id===id).loveNum++;
//         // console.log("执行了CHANGE_STUDYLIST_ID",state,option,option2);
//     }
// };
// const getters={
//     loveSum(state){
//         var s=0;
//         state.studyList.forEach(v=>{
//             s+=v.loveNum;
//         });
//         return s;
//     }
// }
// // 创建仓库
// var store=new Vuex.Store({
//     state,
//     // 修改数据（sate） 同步
//     mutations,
//     getters
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
    store,
  components: { App,Demo },
  template: '<Demo/>'
})
