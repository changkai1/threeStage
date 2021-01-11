import axios from "axios"
import Vue from "vue"
var vue = new Vue();
export default {
    state: {
        adminId:localStorage.adminId || null,
        adminName:localStorage.adminName || null
    },
    mutations: {
        CHANGE_ADMININFO(state,info){
            state.adminId = localStorage.adminId = info.adminId;
            state.adminName = localStorage.adminName = info.adminName;
        },
        OUT_LOGIN(state){
            localStorage.clear();
            state.adminId = localStorage.adminId;
            state.adminName = localStorage.adminName;
            vue.$message({
                message: '退出成功',
                type: 'success'
            });
        }
    },
    getters: {
        
    },
    actions: {
        login({commit,state,getters},{adminName,passWord,success,error}){
            axios.post("/login",{
               adminName,
               passWord
            }).then(({data})=>{
                console.log(data)
                if( data.ok === 1 ){
                    // 成功之后，把Id和adminName存到localStorage中
                    commit("CHANGE_ADMININFO",data);
                    success(data.msg)
                }else{
                    error(data.msg)
                }
            })
        }
    }
}