import axios from "axios";
export default {
    state:{
        adminId:localStorage.adminId || null,
        adminName:localStorage.adminName || null
    },
    mutations:{
        CHANGE_ADMININFO(state,info){
            state.adminId=localStorage.adminId=info.adminId;
            state.adminName=localStorage.adminName=info.adminName;
        }

    },
    getters:{

    },
    actions:{
        login({commit,state,getter},{adminName,passWord,success,error}){
            axios.post("/login",{
                adminName,
                passWord
            }).then(data=>{
                // commit("")
                if(data.ok===1){
                    commit("CHANGE_ADMININFO",data);
                    success(data.msg);
                }else
                    error(data.msg);
            })
        }
    }
}
