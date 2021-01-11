import userNameReducer from "./userName";
import voteListReducer from "./voteList";
import voteInfoReducer from "./userInfo"
import {
    combineReducers
} from "redux";

export default combineReducers({
    userName:userNameReducer.userName,
    voteList:voteListReducer.voteList,
    userInfo:voteInfoReducer.userInfo
})