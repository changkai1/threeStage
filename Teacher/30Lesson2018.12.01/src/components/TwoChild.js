import React from "react";
export default class TwoChild extends React.Component{
    render(){
        return (
            <div>
                <input type="button" value={"twochild跳转到首页"}
                onClick={()=>{
                    this.props.history.push("/")
                }}/>
                TwoChild
            </div>
        )
    }
    componentWillMount(){
        console.log("twoChild:",this.props.match.params)
    }
}