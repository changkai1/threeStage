import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  connect
} from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
          {
            this.props.voteList.map(v=>{
              return (
                  <div key={v.id}>
                     <h3>{v.voteName}</h3>
                    <p>票数：{v.voteNum}</p>
                      <input type="button" value={"投票"} onClick={()=>{this.props.test(v.id)}}/>
                      <hr/>
                  </div>
              )
            })
          }
      </div>
    );
  }
  componentWillMount(){
    console.log(22222,this.props);
  }
}

function mapStateToProps(state){
    return {
        userList:state.userName,
        voteList:state.voteList
    }
}
function mapDispatchToProps(dispatch){
  return {
      test(id){
          // console.log(id);
          dispatch({
              type:"TEST",
              payload:{
                id
              }
          })
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);




// export default connect((state)=>{
//   console.log(111111,state);
//   return {
//      userList:state.userName,
//       voteList:state.voteList
//   }
// },(dispatch)=>{
//    return {
//         test(){
//           dispatch({
//               type:"TEST"
//           })
//         }
//    }
// })(App);
