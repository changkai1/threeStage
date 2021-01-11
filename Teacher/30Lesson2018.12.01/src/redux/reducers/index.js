import {
    combineReducers
} from "redux";
import goodsReducer from "./goods";
import carReducer from "./car"
export default combineReducers({
    goods:goodsReducer.goods,
    car:carReducer.car
})