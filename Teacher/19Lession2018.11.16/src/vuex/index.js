import Vuex from "vuex";
import Vue from "vue";
import adv from "./adv";
import goods from "./goods"
Vue.use(Vuex);
const state={
    userName:"laoli",
    studyList:[]
}
const mutations={
    CHANGE_STUDYLIST_ID(state,id){
        // var studyinfo=state.studyList.find(v=>v.id===id);
        // studyinfo.loveNum++;
        state.studyList.find(v=>v.id===id).loveNum++;
        // console.log("执行了CHANGE_STUDYLIST_ID",state,option,option2);
    },
    CHANGE_STUDYLIST_INIT(state,info){
        state.studyList=info;
    }
};
const getters={
    loveSum(state){
        var s=0;
        state.studyList.forEach(v=>{
            s+=v.loveNum;
        });
        return s;
    }
};
const actions={
    // ajax 异步调取
    getStudyList({state,commit}){
        // state,commit,dispatch
        // ajax 调取
        var arr=[
            {
                id:1,
                title:"php",
                day:2,
                loveNum:0
            },
            {
                id:2,
                title:"node",
                day:5,
                loveNum:0
            },
            {
                id:3,
                title:"vue",
                day:1,
                loveNum:0
            }
        ];
        commit("CHANGE_STUDYLIST_INIT",arr);
        // state.studyList=arr;
        // console.log("执行了getStudyList",v,v1,v2);
    }
}
// 创建仓库
export default new Vuex.Store({
    state,
    // 修改数据（sate） 同步
    mutations,
    getters,
    actions,
    modules:{
        adv,
        goods
    }
})
