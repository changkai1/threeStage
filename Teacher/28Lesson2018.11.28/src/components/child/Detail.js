import React from "react";
import Collect from "./Collect"
class Detail extends React.Component{
    constructor(){
        super();
        this.state={
            newInfo:{}
        }
    }
    render(){
        return (
            <div>
                <input type="button" value={"返回"} onClick={()=>{
                    this.props.history.go(-1);
                }}/>
                <Collect></Collect>
                <h3>{this.state.newInfo.newTitle}</h3>
                <div>
                    {this.state.newInfo.newDetail}
                </div>
            </div>
        )
    }
    componentDidMount(){
        var newList=JSON.parse(localStorage.newList14);
        var newInfo=newList.find(v=>v.id===this.props.match.params.id/1);
        this.setState({
            newInfo
        })
    }
}
export default Detail;