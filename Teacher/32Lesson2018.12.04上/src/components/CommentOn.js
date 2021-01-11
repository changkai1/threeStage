import React from "react";
import {
    connect
} from "react-redux";
import contextAction from "../store/actionCreator/contextAction"
import axios from "axios";
class CommentOn extends React.Component{
    render(){
        return (
            <div className="commentOn">
                <div className="noContent">暂无留言</div>

                <div className="messList">
                    {
                        this.props.contextList.map(v=>{
                            return (
                                <div className="reply" key={v._id}>
                                    <p className="replyContent">{v.context}</p>
                                    <p className="operation">
                                        <span className="replyTime">2017.7.30</span>
                                        <span className="handle">
                                            <a href="javascript:;" className="top">0</a>
                                            <a href="javascript:;" className="down_icon">9</a>
                                            <a href="javascript:;" className="cut">删除</a>
                                        </span>
                                    </p>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="page">
                    <a href="javascript:;" className="active">1</a>
                    <a href="javascript:;">2</a>
                    <a href="javascript:;">3</a>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getWeibo();
    }
}
function mapStateToProps(state){
    return {
        contextList:state.contextView.contextList,
        pageIndex:state.contextView.pageIndex,
        pageSum:state.contextView.pageSum
    }
}
function mapDispatchToProps(dispatch){
    return {
        getWeibo(){
            // contextAction.getWeibo(dispatch);
            // 方法
            dispatch((dispatch,getState)=>{
                var state=getState();// store.getState();所有的数据状态
                // 逻辑
                axios.get("/weibo",{
                    params:{
                        pageIndex:1
                    }
                }).then(data=>{
                    console.log(22222,data);
                })
            });
        }
        // getWeibo(){
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
}
export default  connect(mapStateToProps,mapDispatchToProps)(CommentOn);