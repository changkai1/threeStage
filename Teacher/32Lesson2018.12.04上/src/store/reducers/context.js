import initState from "../state/contextView"
export default (state=initState,action)=>{
    switch (action.type){
        case "UP_CONTEXTLIST":
            state.contextList=action.payload.contextView.contextList;
            state.pageIndex=action.payload.contextView.pageIndex;
            state.pageSum=action.payload.contextView.pageSum;
            console.log(333,state);
            break;
    }
    return {...state};
}