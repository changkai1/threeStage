import axios from "axios"
export default {
    upContextList(data){
        return {
            type:"UP_CONTEXTLIST",
            payload:{
                contextView:data
            }
        }
    },
    upWeibo(type,id){
       return ()=>{
           axios.put("/weibo",{
               type,
               id
           }).then(data=>{
               this.getWeibo();
           })
       }
    },
    getWeibo(pageIndex=1){
        return (dispatch,getState)=>{
            axios.get("/weibo",{
                params:{
                    pageIndex
                }
            }).then(data=>{
                dispatch(this.upContextList(data))
            })
        }
    },
    deleteWeibo(id){
        return (dispatch)=>{
            axios.delete("/weibo",{
                params:{
                    id
                }
            }).then(data=>{
                // console.log(this);
                this.getWeibo();
                // dispatch(this.getWeibo())
            })
        }
    }
    // getWeibo(dispatch){
    //     axios.get("/weibo",{
    //         params:{
    //             pageIndex:1
    //         }
    //     }).then(data=>{
    //         console.log(data);
    //         dispatch({
    //             type:"UP_CONTEXTLIST",
    //             payload:{
    //                 contextView:data
    //             }
    //         })
    //     })
    // }
}