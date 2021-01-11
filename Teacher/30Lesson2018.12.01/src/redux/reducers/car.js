import initCarList from "../state/car";
export default {
    car(state=initCarList,action){
        switch (action.type){
            case "UP_BUYNUM":
                state[action.payLoad.carIndex].buyNum+=1;
                break;
            case "ADD_CAR":
                state.push(action.payLoad.carInfo);
                break;
        }
        return state;
    }
}