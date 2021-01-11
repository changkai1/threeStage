import React from "react";
class My extends React.Component{
    constructor(){
        super();
        this.state={
            collectList:JSON.parse(localStorage.myCollect)
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.collectList.map(v=>{
                        return (
                            <p key={v.id}>{v.newTitle}</p>
                        )
                    })
                }
            </div>
        )
    }
    // 挂载完成之前,将用户登陆以后的信息放到localStorage.userName14
    componentWillMount(){
        // 如果没有登陆跳转至登陆界面
        if(!localStorage.userName14)
            this.props.history.push("/login");
    }
}
export default My;