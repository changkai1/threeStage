import store from "../";
import carCreator from "../actionCreator/car";
export default {
    addCar(id){// 将商品添加到购物车内
        var carIndex=store.getState().car.findIndex(v=>v.id===id);
        if(carIndex>-1){
            // 有  更新
            store.dispatch(carCreator.upBuyNum(carIndex))
        }else{
            var goodsInfo=store.getState().goods.find(v=>v.id===id);
            // 无
            store.dispatch(carCreator.addCar({
                id:goodsInfo.id,
                goodsName:goodsInfo.goodsName,
                price:goodsInfo.price,
                buyNum:1
            }))
        }
    }
}