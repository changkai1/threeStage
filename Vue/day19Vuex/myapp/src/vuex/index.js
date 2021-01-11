//1. 引入vuex
import Vuex from 'vuex'
import Vue from 'vue'
import adv from './adv'
import goods from './goods'
//2. 使用vuex
Vue.use(Vuex);

const state = {
    userName:"lalala",
    studyList:[]
}

const mutations = { 
    //修改state数据,同步 函数名大写
    CHANGE_STUDYLIST_ID(state,id){ //第一个参数:state里的数据，第二个参数:传的值
        var studyinfo = state.studyList.find(v=>v.id === id);
        studyinfo.loveNum += 1;
    },
    CHANGE_STUDYLIST_INIT(state,info){
        state.studyList = info
    }
}

const getters = { //相当于计算属性
    loveNum(state){
        var s = 0;
        state.studyList.forEach(v => {
            s += v.loveNum;
        });
        return s;
    }
}

const actions = {  //ajax的异步
    getStudyList(v,v1){
        // v 里面包含：state、commit、dispatch、getters
        var arr = [
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
        ]
        console.log("执行了getStudyList",v,v1);
        // ajax得到的arr，在mutations中修改
        v.commit("CHANGE_STUDYLIST_INIT",arr)
    }
}

//3.创建仓库
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules:{
        adv,
        goods
    }
})