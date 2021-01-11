import React from "react";
class One extends React.Component{
    render(){
        return (
            <div>ONE</div>
        )
    }
    // nextProps要修改为
    componentWillReceiveProps(nextProps){
        console.log(11111,this.props.match.params,nextProps.match.params);
    }
    componentDidMount(){
        console.log(22222,this.props.match.params);
    }
}
export default One;