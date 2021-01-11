import React from "react";
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from "react-router-dom";
import TiYu from "./TiYu"
import YuLe from "./YuLe"
import JunShi from "./JunShi"
export default class Index extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <nav>
                        <NavLink exact style={{margin:"10px",color:"green"}} activeStyle={{color:"red"}} to={"/news/tiyu"}>体育</NavLink>
                        <NavLink exact style={{margin:"10px",color:"green"}} activeStyle={{color:"red"}} to={"/news/yule"}>娱乐</NavLink>
                        <NavLink exact style={{margin:"10px",color:"green"}} activeStyle={{color:"red"}} to={"/news/junshi"}>军事</NavLink>
                    </nav>
                    <Route exact path={"/news/tiyu"} component={TiYu}></Route>
                    <Route path={"/news/yule"} component={YuLe}></Route>
                    <Route path={"/news/junshi"} component={JunShi}></Route>
                </div>
            </Router>
        )
    }
}