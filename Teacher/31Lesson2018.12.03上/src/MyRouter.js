import React from "react";
import {Route,NavLink,Link} from "react-router-dom";
import Two from "./components/Two";
import One from "./components/One";
import News from "./components/news/Index"

export default class MyRouter extends React.Component{
    render(){
        return (
            <div>
                <nav>
                    <NavLink exact style={{margin:"10px",color:"green"}} activeStyle={{color:"red"}} to={"/"}>首页</NavLink>
                    <NavLink style={{margin:"10px",color:"green"}} activeStyle={{color:"red"}} to={"/two/1/3"}>two</NavLink>
                    <NavLink style={{margin:"10px",color:"green"}} activeStyle={{color:"red"}} to={"/news/tiyu"}>新闻</NavLink>
                    {/*<Link style={{margin:"10px",color:"green"}}  to={"/two/1/4"}>two</Link>*/}
                </nav>
                <Route path={"/"} exact component={One}></Route>
                <Route path={"/two/:id/:type"} component={Two}></Route>
                <Route path={"/news/:typeName"} exact component={News}></Route>
            </div>
        )
    }
}