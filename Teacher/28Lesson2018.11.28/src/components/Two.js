import React from "react";
export default class Two extends React.Component{
    render(){
        return (
            <div>
                我是Two
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.location.query)
    }
}