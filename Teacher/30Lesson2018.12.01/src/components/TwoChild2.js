import React from "react";
import {withRouter} from "react-router-dom"
export default withRouter(class TwoChild2 extends React.Component{
    render(){
        return (
            <div>
                <input type="button" value={"twochild2跳转到首页"}
                       onClick={()=>{
                           this.props.history.push("/")
                       }}/>
                TwoChild
            </div>
        )
    }
    componentWillMount(){
        console.log("twoChild2:",this.props.match.params)
    }
})