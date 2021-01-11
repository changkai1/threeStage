import React from "react";
import One from "./One"
import Two from "./Two"
import Three from "./Three"
import Nav from "./Nav"
import Error from "./Error"
import "../App.css"
import{
    BrowserRouter as Router,
    Route,
    // NavLink,
    Switch,
    Redirect
} from "react-router-dom"
class My extends React.Component{
// <div>
// 这是我的第一个ReactApp
// <One></One>
// <Two></Two>
// <Three></Three>
// </div>
    render(){
        return (
            <div>

                <Router>
                    <div>
                        <Nav></Nav>
                        <Switch>
                            <Route exact path={"/"} component={One}></Route>
                            <Route exact path={"/one/:id/:type"} component={One}></Route>
                            <Route path={"/two"} component={Two}></Route>
                            <Route path={"/three"} component={Three}></Route>
                            <Redirect from={"/five"} to={"/two"}></Redirect>
                            <Route component={Error}></Route>
                        </Switch>
                    </div>

                </Router>
            </div>

        )
    }
}
export default My;