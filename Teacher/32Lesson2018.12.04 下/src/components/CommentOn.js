import React from "react";
import {
    connect
} from "react-redux";
import pubSub from "pubsub-js";
import {
    bindActionCreators
} from 'redux';
import contextAction from "../store/actionCreator/contextAction"
import axios from "axios";
class CommentOn extends React.Component{
    sendMsg(){

        /*
        * 将一个组件卸载掉。 组件当中有订阅者，*/
        // console.log(22222222);
        // console.log(pubSub);
        pubSub.publish("ok","收到录用通知书啦","asdfasdf");
        pubSub.publish("noOk","78","asdfasdf");
        // console.log(pubSub);
    }
    componentWillMount(){
        pubSub.subscribe("noOk",(name,context)=>{
            console.log("on",context);
        })
        pubSub.unsubscribe("noOk");

    }
    render(){
        return (
            <div className="commentOn">
                <input type="button" value={"xixixixix"} onClick={this.sendMsg}/>
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
                                            <a href="javascript:;"  onClick={()=>{
                                                this.props.upWeibo(1,v._id)
                                            }} className="top">{v.topNum}</a>
                                            <a href="javascript:;"  onClick={()=>{
                                                this.props.upWeibo(2,v._id)
                                            }} className="down_icon">{v.downNum}</a>
                                            <a href="javascript:;" onClick={()=>{this.props.deleteWeibo(v._id)}} className="cut">删除</a>
                                        </span>
                                    </p>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="page">
                    {
                        this.props.pageArr.map(v=>{
                            return (
                                 <a key={v} href="javascript:;" onClick={()=>{
                                     this.props.getWeibo(v)
                                 }} className={v===this.props.pageIndex?"active":""}>{v}</a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getWeibo();
        console.log(4444,this.props);
    }
}
function mapStateToProps(state){
    var pageArr=[];
    for(var i=1;i<=state.contextView.pageSum;i++){
        pageArr.push(i);
    }
    return {
        contextList:state.contextView.contextList,
        pageIndex:state.contextView.pageIndex,
        pageSum:state.contextView.pageSum,
        pageArr
    }
}

// function test(action,dispatch){
//
//
//
//
//     var obj={};
//     for(var i in action){
//         // obj[i]=function(){
//         //     console.log(11111111111111,i);
//         //     dispatch(action[i]())
//         // }
//
//
//         obj[i]=(function(i){
//             return function(){
//                 console.log(11111111111111,i);
//                 dispatch(action[i]());
//             }
//         })(i);
//     }
//     console.log(22222,obj);
//     return obj;
// }
function mapDispatchToProps(dispatch){
    // props.deleteweibo=====dispatch(contextAction.deleteweibo(id)
    /*
    * 1、contextAction对象下的属性作为你的PROPS的属性
    * 2、在调用的时候，getWeibo（）   相当于  dispatch(getWeibo())
    * 3、不用通过dispatch来执行action了
    *
    *
    *
    * */
    return bindActionCreators(contextAction,dispatch);
    // return test(contextAction,dispatch);

    // return {
    //     getWeibo(){
    //         dispatch(contextAction.getWeibo())
    //     },
    //     deleteWeibo(id){
    //         dispatch(contextAction.deleteWeibo(id))
    //     }
    // }





   // return {
    //     getWeibo(){
    //         // contextAction.getWeibo(dispatch);
    //         dispatch(contextAction.upWeibo())
    //         // dispatch((dispatch,getState)=>{
    //         //     // console.log(111111,getState());
    //         //     // 异步操作
    //         //     axios.get("/weibo",{
    //         //         params:{
    //         //             pageIndex:1
    //         //         }
    //         //     }).then(data=>{
    //         //         dispatch({
    //         //             type:"UP_CONTEXTLIST",
    //         //             payload:{
    //         //                 contextView:data
    //         //             }
    //         //         })
    //         //     })
    //         // })
    //         // 方法
    //
    //     }
    //     // getWeibo(){
    //     //     axios.get("/weibo",{
    //     //         params:{
    //     //             pageIndex:1
    //     //         }
    //     //     }).then(data=>{
    //     //         console.log(data);
    //     //         dispatch({
    //     //             type:"UP_CONTEXTLIST",
    //     //             payload:{
    //     //                 contextView:data
    //     //             }
    //     //         })
    //     //     })
    //     // }
    // }
}
// export default  connect(mapStateToProps,mapDispatchToProps)(CommentOn);
export default  connect(mapStateToProps,dispatch=>bindActionCreators(contextAction,dispatch))(CommentOn);