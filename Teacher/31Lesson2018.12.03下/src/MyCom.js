import React from "react";
import Login from "./components/Login";
import Vote from "./components/Vote";
import {
    connect
} from "react-redux";
class MyCom extends React.Component{
    render(){
        return (
            <div>
                <input type="button" value={"点我"} onClick={()=>{
                    this.props.changeUserId();
                }}/>
                {
                    this.props.userId ? <Vote/> :<Login/>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userId:state.userInfo.userId
    }
}
function mapDispatchToProps(dispatch){
    return {
        changeUserId(){
            dispatch({
                type:"CHANGE_USERID"
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyCom);

