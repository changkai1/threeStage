import React from "react";
export default class Three extends React.Component{
    render(){
        return (
            <div>
                我是Three
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.location.state);
    }
}