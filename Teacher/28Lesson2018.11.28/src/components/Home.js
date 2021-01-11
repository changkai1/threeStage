import React from "react";
import My from "./child/My";
import Index from "./child/Index";
import Login from "./child/Login";
import Detail from "./child/Detail";
import "../App.css"
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'
class Home extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <nav>
                        <NavLink exact  className={"App-link"} activeStyle={{color:"red"}} to={"/"}>首页</NavLink>
                        <NavLink  className={"App-link"} activeStyle={{color:"red"}} to={"/my"}>我的</NavLink>
                    </nav>
                    <Route exact path={"/"}  component={Index}></Route>
                    <Route path={"/my"}   component={My}></Route>
                    <Route path={"/login"} component={Login}></Route>
                    <Route path={"/Detail/:id"} component={Detail}></Route>
                </div>
            </Router>
        )
    }
    componentWillMount(){
        // if(!localStorage.myCollect){
            // 我的收藏列表
            localStorage.myCollect=JSON.stringify([]);
            // 新闻列表
            localStorage.newList14=JSON.stringify([
                {
                    id:1,
                    typeName:"娱乐",
                    newTitle:"易烊千玺喜迎18岁生日，队友王源王俊凯送搞笑表情包祝福",
                    newDetail:"TFboys作为新生代的当红小生，以超高的颜值、清新的形象、过硬的实力吸引了一大批迷妹，不少粉丝都笑称看着三人一路走来像是在玩养成系游戏，今日，四字弟弟易烊千玺终于迎来了成人礼，TFboys终于喜称“成人团”。"
                },
                {
                    id:2,
                    typeName:"体育",
                    newTitle:"湖人32分惨负掘金 詹皇仅拿14分",
                    newDetail:"腾讯体育11月28日讯 NBA常规赛，湖人客场85-117负于掘金，遭遇本赛季最惨败仗，吞下两连败。詹姆斯15投5中仅得14分，创湖人生涯得分新低，球哥扭伤脚踝提前退场。"
                },
                {
                    id:3,
                    typeName:"财经",
                    newTitle:"雪乡回应明码标价宰客：一个人三四天也就花2千多",
                    newDetail:"又到一年冰雪季，本应最火热的黑龙江哈尔滨雪乡景区却又一次陷入了舆论漩涡中。雪乡人都蒙了，这是要闹那样啊？"
                }
            ])
            // 用户列表
            localStorage.userList14=JSON.stringify([
                "zhangsan",
                "lisi",
                "wangwu"
            ])
        // }

    }
}
export default Home;