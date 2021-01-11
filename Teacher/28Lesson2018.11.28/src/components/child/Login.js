import React from "react";
class Login extends React.Component{
    render(){
        return (
            <div>
                <input type="text" onKeyUp={this.login.bind(this)}/>
            </div>
        )
    }
    login(e){
        if(e.keyCode===13){
            var userList=JSON.parse(localStorage.userList14);
            console.log(userList);
            if(userList.includes(e.target.value)){
                localStorage.setItem("userName14",e.target.value);
                this.props.history.go(-1);
            }else{
                alert("登陆失败")
            }
        }
    }
}
export default Login;