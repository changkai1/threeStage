import React, { Component } from 'react';
import logo from './logo.svg';
import './style/weibo.css';
import axios from "axios";
import CommentOn from "./components/CommentOn";
import TakeComment from "./components/TakeComment"
class App extends Component {
  render() {
    return (
        <div className="jyArea">
            <TakeComment></TakeComment>
            <CommentOn></CommentOn>

        </div>
    );
  }
	componentDidMount(){
	   axios.get("/sum",{
	       params:{
	           num:1,
	           num2:2
	       }
	   }).then(data=>{
	       console.log(data);
	   })
	}
}

export default App;
