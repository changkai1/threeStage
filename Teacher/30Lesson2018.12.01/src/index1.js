import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Route,
    HashRouter
} from "react-router-dom"
import MyRouter from "./MyRouter"
ReactDOM.render(
    // basename={"/mo"}
    // forceRefresh={true}
    <Router >
        <MyRouter/>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();