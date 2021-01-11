import React from "react";
import Collect from './Collect'
class Index extends React.Component{
    constructor(){
        super();
        this.state={
            newList:JSON.parse(localStorage.newList14)
        }
    }

    render(){
        return (
            <div>
                {
                    this.state.newList.map(v=>{
                        return (
                            <p key={v.id}>[{v.typeName}]<a href={"javascript:;"} onClick={()=>{
                                this.props.history.push(`/detail/${v.id}`)
                            }}>{v.newTitle}</a><Collect id={v.id}></Collect>
                            </p>
                        )
                    })
                }
            </div>
        )
    }
}
export default Index;