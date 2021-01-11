import axios from "axios"
export default {
    getWeibo(dispatch){
        axios.get("/weibo",{
            params:{
                pageIndex:1
            }
        }).then(data=>{
            console.log(data);
            dispatch({
                type:"UP_CONTEXTLIST",
                payload:{
                    contextView:data
                }
            })
        })
    }
}