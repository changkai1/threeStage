import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./config"
import store from "./store";
import {
    Provider
} from "react-redux";
// import axios from "axios";
//
// axios.interceptors.request.use((config)=>{
//     config.url="http://127.0.0.1"+config.url;
//     return config;
// })
// axios.interceptors.response.use(({data})=>{
//     return data;
// })
console.log(store.getState())
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
