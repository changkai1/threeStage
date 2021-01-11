import React from "react";
import store from "../redux";
import carAction from "../redux/action/car"
class Goods extends React.Component{
    constructor(){
        super();
        this.state={
            goodsList:store.getState().goods,
            carList:store.getState().car
        }
    }
    componentWillMount(){
        // 在执行一个侦听，当你的状态发生变化时会执行到我
        store.subscribe(()=>{
            // console.log(12121212);
            this.setState({
                carList:store.getState().car
            })
        })
    }
    render(){
        return (
            <div>
                {
                    this.state.goodsList.map(v=>{
                        return (
                            <div key={v.id}>
                                <h3>{v.goodsName}</h3>
                                <p>价格：{v.price}</p>
                                {/*<input type="button" onClick={()=>{carAction.addCar(v.id,this)}} value={"加入购物车"}/>*/}
                                <input type="button" onClick={()=>{carAction.addCar(v.id)}} value={"加入购物车"}/>
                                <hr/>
                            </div>
                        )
                    })
                }
                <hr/>
                {
                    this.state.carList.map(v=>{
                        return (
                            <div key={v.id}>
                                <h3>{v.goodsName}</h3>
                                <p>价格：{v.price}</p>
                                <p>数量：{v.buyNum}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Goods;