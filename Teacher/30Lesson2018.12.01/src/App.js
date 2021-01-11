import React, { Component } from 'react';
import logo from './logo.svg';
import One from './components/One'
import Two from './components/Two'
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route path={"/"} exact component={One}></Route>
                <Route path={"/two"} component={Two}></Route>
            </div>
        </Router>
    );
  }
}

export default App;
