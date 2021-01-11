import initState from "../state/voteList"
export default {
    voteList(state=initState,action){
        switch (action.type){
            case "TEST":
                console.log(state);
                var voteIndex=state.findIndex(v=>v.id===action.payload.id);
                state[voteIndex].voteNum+=1;

                // console.log("会不会运行到这呢",action.payload.id);
                break;
        }
        return [...state];
    }
}
// store