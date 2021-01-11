import carType from "../actionType/car"
export default {
    upBuyNum(carIndex){
        return {
            type:carType.UP_BUYNUM,
            payLoad:{
                carIndex
            }
        }
    },
    addCar(carInfo){
        return {
            type:carType.ADD_CAR,
            payLoad:{
                carInfo
            }
        }
    }
}