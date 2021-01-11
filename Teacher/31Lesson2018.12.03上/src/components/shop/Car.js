import React from "react";
import store from "../../redux"
export let num=3;

export default class Car extends React.Component{
    constructor(){
        super();
        this.state={
            carList:store.getState().car
        }
    }
    componentWillMount(){

        store.subscribe(()=>{
            console.log("car");
            this.setState({
                carList:store.getState().car
            })
        })
    }
    render(){
        return (
            <div>
                {
                    this.state.carList
                    // this.state.carList.map(v=>{
                    //     return (
                    //         <div key={v.id}>
                    //             <h3>{v.goodsName}</h3>
                    //             <p>{v.buyNum}</p>
                    //         </div>
                    //     )
                    // })
                }
            </div>
        )
    }
}
// export Car;
// import Car,{num} from ""

