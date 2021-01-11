import initState from "../state/userInfo"
export default {
    userInfo(state=initState,action){
        switch (action.type){
            case "CHANGE_USERID":
                 state.userId=localStorage.userId="123";
                 break;
            case "LOGIN":
                state.userId=localStorage.userId=action.payload.userId
                break;
            case "OUT_LOGIN":
                localStorage.removeItem("userId");
                state.userId=localStorage.userId;
                break;

        }
        console.log(state.userId);
        return state;
    }
}