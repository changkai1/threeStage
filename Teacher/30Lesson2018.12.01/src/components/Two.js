import React from "react";
import TwoChild from "./TwoChild"
import TwoChild2 from "./TwoChild2"
export default class Two extends React.Component{
    render(){
        return (
            <div>
                <input type="button" value={"跳转到首页"} onClick={()=>{
                    this.props.history.push("/")
                }}/>
                Two
                <TwoChild match={this.props.match} history={this.props.history}/>
                <TwoChild2/>

            </div>
        )
    }
    componentWillMount(){
        console.log("two:",this.props.match.params)
    }
}