import {
    combineReducers
} from "redux";
import contextReducer from "./context"
export default combineReducers({
    contextView:contextReducer
})