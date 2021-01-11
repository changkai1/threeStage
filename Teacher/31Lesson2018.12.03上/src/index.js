import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./redux";
import Goods from "./components/goods"
import App from "./App"
import * as serviceWorker from './serviceWorker';
// var  goodsList=store.getState().goods;
ReactDOM.render(
   <App/>
    , document.getElementById('root'));

serviceWorker.unregister();








// import store from "./redux";
// import carAction from "./redux/action/car";
// carAction.addCar(1);
// carAction.addCar(1);
// carAction.addCar(2);
// console.log(store.getState());





// console.log(store.getState());






// 购物车
// import {
//     createStore,
//     combineReducers
// } from "redux";
// // 商品初始数据
// var initGoodsList=[{
//     id:1,
//     goodsName:"水果",
//     price:13
// },{
//     id:2,
//     goodsName:"鸡蛋",
//     price:5
// }];// 商品列表
// var initCarList=[];// 购物车初始数据
// var goodsReducer=function(state=initGoodsList,action){
//     return state;
// }
// var carReducer=function(state=initCarList,action){
//     switch (action.type){
//         case "BUYNUM_ADDONE":
//             state[action.payLoad.carIndex].buyNum+=1;
//             break;
//         case "ADD_CAR":
//             state.push(action.payLoad.carInfo);
//             break;
//     }
//     return state;
// }
// var rootReducers=combineReducers({
//     goods:goodsReducer,
//     car:carReducer
// })
// var store=createStore(rootReducers);// 将合并后的rootReducers作为参数传递到createStore，创建仓库
//
// function buyNumAddOneCreator(carIndex){
//     return {
//         type:"BUYNUM_ADDONE",
//         payLoad:{
//             carIndex
//         }
//     }
// }
// function addCarCreator(carInfo){
//     return {
//         type:"ADD_CAR",
//         payLoad:{
//             carInfo
//         }
//     }
// }
//
// function addCar(id){// 往购物内添加商品，返回行为
//     // 有二种行为
//     var goodsInfo=store.getState().goods.find(v=>v.id===id);// 获得商品
//     // 购物车内是否有该商品
//     var carIndex=store.getState().car.findIndex(v=>v.id===id);
//     if(carIndex>-1){// 有
//         store.dispatch(buyNumAddOneCreator(carIndex)) ;
//     }else{// 无
//         store.dispatch(addCarCreator({
//             id:goodsInfo.id,
//             goodsName:goodsInfo.goodsName,
//             price:goodsInfo.price,
//             buyNum:1
//         }))
//     }
// }
//
// // console.log(store.getState());
// // 将商品加入到购物车
// addCar(2);
// addCar(2);
// addCar(1);
// console.log(store.getState());




// // 购物车
// import {
//     createStore,
//     combineReducers
// } from "redux";
// // 商品初始数据
// var initGoodsList=[{
//     id:1,
//     goodsName:"水果",
//     price:13
// },{
//     id:2,
//     goodsName:"鸡蛋",
//     price:5
// }];// 商品列表
// var initCarList=[];// 购物车初始数据
// var goodsReducer=function(state=initGoodsList,action){
//     return state;
// }
// var carReducer=function(state=initCarList,action){
//     switch (action.type){
//         case "BUYNUM_ADDONE":
//             state[action.payLoad.carIndex].buyNum+=1;
//             break;
//         case "ADD_CAR":
//             state.push(action.payLoad.carInfo);
//             break;
//     }
//     return state;
// }
// var rootReducers=combineReducers({
//     goods:goodsReducer,
//     car:carReducer
// })
// var store=createStore(rootReducers);// 将合并后的rootReducers作为参数传递到createStore，创建仓库
//
// function buyNumAddOneCreator(carIndex){
//     return {
//         type:"BUYNUM_ADDONE",
//         payLoad:{
//             carIndex
//         }
//     }
// }
// function addCarCreator(carInfo){
//     return {
//         type:"ADD_CAR",
//         payLoad:{
//             carInfo
//         }
//     }
// }
//
// function addCar(id){// 往购物内添加商品，返回行为
//     // 有二种行为
//     var goodsInfo=store.getState().goods.find(v=>v.id===id);// 获得商品
//     // 购物车内是否有该商品
//     var carIndex=store.getState().car.findIndex(v=>v.id===id);
//     if(carIndex>-1){// 有
//         return buyNumAddOneCreator(carIndex);
//     }else{// 无
//         return addCarCreator({
//             id:goodsInfo.id,
//             goodsName:goodsInfo.goodsName,
//             price:goodsInfo.price,
//             buyNum:1
//         })
//     }
// }
//
// // console.log(store.getState());
// // 将商品加入到购物车
// store.dispatch(addCar(2));
// store.dispatch(addCar(2));
// store.dispatch(addCar(1));
// console.log(store.getState());

















// // 购物车  得到仓库内的数据
// import {
//     createStore,
//     combineReducers
// } from "redux";
// // 商品初始数据
// var initGoodsList=[{
//     id:1,
//     goodsName:"水果",
//     price:13
// },{
//     id:2,
//     goodsName:"鸡蛋",
//     price:5
// }];// 商品列表
// var initCarList=[];// 购物车初始数据
// var goodsReducer=function(state=initGoodsList,action){
//     return state;
// }
// var carReducer=function(state=initCarList,action){
//     return state;
// }
// var rootReducers=combineReducers({
//     goods:goodsReducer,
//     car:carReducer
// })
// var store=createStore(rootReducers);// 将合并后的rootReducers作为参数传递到createStore，创建仓库
// console.log(store.getState());
//
//
//
//
//
//
//



























// 投票
// import {
//     createStore
// } from "redux";
//
// var initState={
//     userName:"laoli",
//     voteNum:0
// }
// // state 是上一次的返回值
// var reducer=function(state=initState,action){
//     console.log(1111,state);
//     switch (action.type){
//         case "CAHNGE_VOTENUM":
//             state.voteNum+=action.payLoad.num;
//             return state;
//         default:
//             return state;
//     }
// }
// var store=createStore(reducer);
// function changeVoteNum(num){
//     return {
//         type:"CAHNGE_VOTENUM",
//         payLoad:{
//             num
//         }
//     }
// }
// store.dispatch(changeVoteNum(1));
// console.log(store.getState());
// store.dispatch(changeVoteNum(3));
// console.log(store.getState());
// store.dispatch(changeVoteNum(4));
// console.log(store.getState());
// store.dispatch(changeVoteNum(5));
// console.log(store.getState());
























// // 投票
// import {
//     createStore
// } from "redux";
//
// var initState={
//     userName:"laoli",
//     voteNum:0
// }
// // state 是上一次的返回值
// var reducer=function(state=initState,action){
//     console.log(1111,state);
//     switch (action.type){
//         case "CAHNGE_VOTENUM":
//             state.voteNum+=1;
//             break;
//     }
//     return state;
// }
// var store=createStore(reducer);
// store.dispatch({
//     type:"CAHNGE_VOTENUM"
// });
// console.log(store.getState());
// store.dispatch({
//     type:"CAHNGE_VOTENUM"
// });
// console.log(store.getState());






















// import {
//     createStore,// 创建仓库
//     combineReducers,// 对Reducer的合并
// } from "redux";
// /*
// * 1、状态是如何来的
// * 2、状态如何操作*/
// var initState={// 初如数据
//     userName:"laowang",
//     age:12
// }
// var reducer=function(state=initState,action){// 仓库工人，一个工人负责一个数据模块
//     console.log(11111,state,action);
//     if(action.type==="CHANGE_AGE"){
//         state.age=1;
//     }
//     return state;// 返回的是什么，那么store.getState()得到的就是什么
// }
// var store=createStore(reducer);// 创建仓库
// // 得到状态
// console.log(store.getState());// 获取仓库内的状态，是reducer的返回值
// // 如果要对你的状态进行修改，唯一的合法方式就是通过action. 要执行你的action需要通过store.
// store.dispatch({
//     type:"CHANGE_AGE"
// })
// console.log(store.getState());

// 操作状态.直接修改不是正规则途径。
// store.getState().userName="laoliu";
// console.log(store.getState());





// // 购物车
// import {
//     createStore,
//     combineReducers
// } from "redux";
// // 商品初始数据
// var initGoodsList=[{
//     id:1,
//     goodsName:"水果",
//     price:13
// },{
//     id:2,
//     goodsName:"鸡蛋",
//     price:5
// }];// 商品列表
// var initCarList=[];// 购物车初始数据
// var goodsReducer=function(state=initGoodsList,action){
//     return state;
// }
// var carReducer=function(state=initCarList,action){
//     switch (action.type){
//         case "BUYNUM_ADDONE":
//             state[action.payLoad.carIndex].buyNum+=1;
//             break;
//         case "ADD_CAR":
//             state.push(action.payLoad.carInfo);
//             break;
//     }
//     return state;
// }
// var rootReducers=combineReducers({
//     goods:goodsReducer,
//     car:carReducer
// })
// var store=createStore(rootReducers);// 将合并后的rootReducers作为参数传递到createStore，创建仓库

//
//
// function addCar(id){// 往购物内添加商品，返回行为
//     // 有二种行为
//     var goodsInfo=store.getState().goods.find(v=>v.id===id);// 获得商品
//     // 购物车内是否有该商品
//     var carIndex=store.getState().car.findIndex(v=>v.id===id);
//     if(carIndex>-1){// 有
//         return {
//             type:"BUYNUM_ADDONE",
//             payLoad:{
//                 carIndex
//             }
//         }
//     }else{// 无
//         return {
//             type:"ADD_CAR",
//             payLoad:{
//                 carInfo:{
//                     id:goodsInfo.id,
//                     goodsName:goodsInfo.goodsName,
//                     price:goodsInfo.price,
//                     buyNum:1
//                 }
//             }
//         }
//     }
// }
//
// // console.log(store.getState());
// // 将商品加入到购物车
// store.dispatch(addCar(2));
// store.dispatch(addCar(2));
// store.dispatch(addCar(1));
// console.log(store.getState());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // // 购物车  得到仓库内的数据
// // import {
// //     createStore,
// //     combineReducers
// // } from "redux";
// // // 商品初始数据
// // var initGoodsList=[{
// //     id:1,
// //     goodsName:"水果",
// //     price:13
// // },{
// //     id:2,
// //     goodsName:"鸡蛋",
// //     price:5
// // }];// 商品列表
// // var initCarList=[];// 购物车初始数据
// // var goodsReducer=function(state=initGoodsList,action){
// //     return state;
// // }
// // var carReducer=function(state=initCarList,action){
// //     return state;
// // }
// // var rootReducers=combineReducers({
// //     goods:goodsReducer,
// //     car:carReducer
// // })
// // var store=createStore(rootReducers);// 将合并后的rootReducers作为参数传递到createStore，创建仓库
// // console.log(store.getState());
// //
// //
// //
// //
// //
// //
// //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // 投票
// // import {
// //     createStore
// // } from "redux";
// //
// // var initState={
// //     userName:"laoli",
// //     voteNum:0
// // }
// // // state 是上一次的返回值
// // var reducer=function(state=initState,action){
// //     console.log(1111,state);
// //     switch (action.type){
// //         case "CAHNGE_VOTENUM":
// //             state.voteNum+=action.payLoad.num;
// //             return state;
// //         default:
// //             return state;
// //     }
// // }
// // var store=createStore(reducer);
// // function changeVoteNum(num){
// //     return {
// //         type:"CAHNGE_VOTENUM",
// //         payLoad:{
// //             num
// //         }
// //     }
// // }
// // store.dispatch(changeVoteNum(1));
// // console.log(store.getState());
// // store.dispatch(changeVoteNum(3));
// // console.log(store.getState());
// // store.dispatch(changeVoteNum(4));
// // console.log(store.getState());
// // store.dispatch(changeVoteNum(5));
// // console.log(store.getState());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // // 投票
// // import {
// //     createStore
// // } from "redux";
// //
// // var initState={
// //     userName:"laoli",
// //     voteNum:0
// // }
// // // state 是上一次的返回值
// // var reducer=function(state=initState,action){
// //     console.log(1111,state);
// //     switch (action.type){
// //         case "CAHNGE_VOTENUM":
// //             state.voteNum+=1;
// //             break;
// //     }
// //     return state;
// // }
// // var store=createStore(reducer);
// // store.dispatch({
// //     type:"CAHNGE_VOTENUM"
// // });
// // console.log(store.getState());
// // store.dispatch({
// //     type:"CAHNGE_VOTENUM"
// // });
// // console.log(store.getState());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // import {
// //     createStore,// 创建仓库
// //     combineReducers,// 对Reducer的合并
// // } from "redux";
// // /*
// // * 1、状态是如何来的
// // * 2、状态如何操作*/
// // var initState={// 初如数据
// //     userName:"laowang",
// //     age:12
// // }
// // var reducer=function(state=initState,action){// 仓库工人，一个工人负责一个数据模块
// //     console.log(11111,state,action);
// //     if(action.type==="CHANGE_AGE"){
// //         state.age=1;
// //     }
// //     return state;// 返回的是什么，那么store.getState()得到的就是什么
// // }
// // var store=createStore(reducer);// 创建仓库
// // // 得到状态
// // console.log(store.getState());// 获取仓库内的状态，是reducer的返回值
// // // 如果要对你的状态进行修改，唯一的合法方式就是通过action. 要执行你的action需要通过store.
// // store.dispatch({
// //     type:"CHANGE_AGE"
// // })
// // console.log(store.getState());
//
// // 操作状态.直接修改不是正规则途径。
// // store.getState().userName="laoliu";
// // console.log(store.getState());
