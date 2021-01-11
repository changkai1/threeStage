import React from "react";
import {NavLink} from "react-router-dom"
class Nav extends React.Component{
    render(){
        return (
            <nav>
                <NavLink className={"blue"} exact activeStyle={{color:"red"}} to={"/"}>首页1</NavLink>
                <NavLink className={"blue"} exact activeStyle={{color:"red"}} to={"/one/1/3"}>one</NavLink>
                <NavLink className={"blue"} activeClassName={"active"} to={{pathname:"/two",query:{a:1,b:2,c:{username:"laotie"}}}}>Two2</NavLink>
                <NavLink className={"blue"} activeStyle={{color:"red"}} to={{pathname:"/three",state:{id:3,type:5,c:{age:12}}}}>Three3</NavLink>
            </nav>
        )
    }
}
export default  Nav;