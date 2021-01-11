import React from "react";
import {
    connect
} from "react-redux";
class Login extends React.Component{
    render(){
        return (
            <div>
                <p>用户名：<input ref={"userName"} type="text"/></p>
                <p>密码：<input ref={"passWord"} type="text"/></p>
                <p><input type="button" value={"登陆"} onClick={()=>{
                    console.log(this.refs.userName.value);
                    this.props.login(this.refs.userName.value,this.refs.passWord.value);
                }}/></p>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        userList:state.userName
    }
}
function mapDispatchToProps(dispatch){
    return {
        login(userName,passWord){
            var userIndex=this.userList.findIndex(v=>{
                return v.userName===userName && v.passWord===passWord
            })
            if(userIndex>-1){
                dispatch({
                    type:"LOGIN",
                    payload:{
                        userId:this.userList[userIndex].id
                    }
                })
                // localStorage.userId=this.userList[userIndex].id;
            }else{
                alert("登陆失败")
            }
            // console.log(userIndex);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login) ;