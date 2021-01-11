import React from "react";
import  Car,{num} from "./components/shop/Car"
import Goods from "./components/shop/Goods"
console.log(num);
class App extends React.Component{
    render(){
        return (
            <div>
                <Goods/>
                <Car/>
            </div>
        )
    }
}
export default  App;











// import React, { Component } from 'react';
// import logo from './logo.svg';
// import One from './components/One'
// import Two from './components/Two'
// import {
//     BrowserRouter as Router,
//     Route
// } from "react-router-dom"
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//         <Router>
//             <div>
//                 <Route path={"/"} exact component={One}></Route>
//                 <Route path={"/two"} component={Two}></Route>
//             </div>
//         </Router>
//     );
//   }
// }
//
// export default App;
