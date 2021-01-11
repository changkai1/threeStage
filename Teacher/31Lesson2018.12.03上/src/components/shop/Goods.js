import React from "react";
import store from "../../redux"
import carAction from "../../redux/action/car"
class Goods extends React.Component{
    constructor(){
        super();
        this.state={
            goodsList:store.getState().goods
        }
    }
    componentWillMount(){
        store.subscribe(()=>{
            console.log("goods")
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
                                <input type="button" onClick={()=>{
                                    carAction.addCar(v.id)
                                }} value={"加入购物车"}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default  Goods;

