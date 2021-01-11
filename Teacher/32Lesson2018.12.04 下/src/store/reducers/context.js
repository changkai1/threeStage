import initState from "../state/contextView"
export default (state=initState,action)=>{
    // 建议： state
    // 不允许直接修改state.  在复本当中修改
    //  {a:{b:{}}}
    var str=JSON.stringify(state);
    var newState=JSON.parse(str);
    switch (action.type){
        case "UP_CONTEXTLIST":
            newState.contextList=action.payload.contextView.contextList;
            newState.pageIndex=action.payload.contextView.pageIndex;
            newState.pageSum=action.payload.contextView.pageSum;
            console.log(333,newState);
            break;
    }
    return newState;
}