import React from "react";
import {
    connect
} from "react-redux"
class Vote extends React.Component{
    render(){
        return (
            <div>
                <div>
                    您的userId为{this.props.userId}
                    <input type="button" value={"退出登陆"} onClick={()=>{
                        this.props.outLogin();
                    }}/>
                </div>
                {
                    this.props.voteList.map(v=>{
                        return (
                            <div key={v.id}>
                               <h3>{v.voteName}</h3>
                                <p>票数：{v.voteNum}</p>
                                <input type="button" value={"投票"} onClick={()=>{
                                    this.props.test(v.id)
                                }}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default connect((state)=>{
    return {
        userId:state.userInfo.userId,
        voteList:state.voteList
    }
},(dispatch)=>{
    return {
        test(id){
            dispatch({
                type:"TEST",
                payload:{
                    id
                }
            })
        },
        outLogin(){
            dispatch({
                type:"OUT_LOGIN"
            })
        }
    }
})(Vote);