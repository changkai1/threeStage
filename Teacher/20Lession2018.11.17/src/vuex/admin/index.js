import axios from "axios";
export default {
    state:{

    },
    mutations:{

    },
    getters:{

    },
    actions:{
        login(){
            axios.post("/post",{
                a:1,
                b:2
            }).then(data=>{
                console.log(data);
            })
        }
    }
}
