import React from "react";
import {
    connect
} from "react-redux";
import axios from "axios";
import pubSub from "pubsub-js"
import contextAction from "../store/actionCreator/contextAction"
class TakeComment extends React.Component{
    constructor(){
        super();
        this.state={
            context:""
        }
    }
    componentWillMount(){
        //subscribe
        pubSub.subscribe("ok",(name,context,str)=>{
            // 当接收到消息后会触发该函数
            console.log("take",context);
        })
    }
    handleChange=(e)=>{
        this.setState({
            context:e.target.value
        })
    }
    addWeibo=()=>{
        console.log(this.state.context);
    }
    render(){
        return (
            <div className="takeComment">
                <textarea name="textarea" onChange={this.handleChange} className="takeTextField"  id="tijiaoText"></textarea>
                <div className="takeSbmComment">
                    <input type="button" className="inputs" value="" onClick={this.props.addWeibo.bind(this)} />
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {

    }
}
function mapDispatchToProps(dispatch){
    return {
        getWeibo(){
            dispatch(contextAction.getWeibo())
            // contextAction.getWeibo(dispatch);
        },
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
        // },
        addWeibo(){
            axios.post("/addweibo",{
                context:this.state.context
            }).then(data=>{
                this.props.getWeibo();
            })
            // dispatch({
            //     type:"UP_CONTEXTLIST"
            // })
        }
    }
}
export  default connect(mapStateToProps,mapDispatchToProps)(TakeComment);