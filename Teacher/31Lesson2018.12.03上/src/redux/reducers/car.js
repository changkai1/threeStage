import initCarList from "../state/car";
import carType from "../actionType/car"
import React from "react"
export default {
    car(state=initCarList,action){
        switch (action.type){
            case carType.UP_BUYNUM:
                state[action.payLoad.carIndex].buyNum+=1;
                break;
            case carType.ADD_CAR:
                state.push(action.payLoad.carInfo);
                break;
        }
        return state.map(v=>{
            return (
                <div key={v.id}>
                    <h3>{v.goodsName}</h3>
                    <p>{v.buyNum}</p>
                </div>
            )
        });
    }
}