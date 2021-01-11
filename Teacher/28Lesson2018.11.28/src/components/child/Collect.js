import React from "react";
export default class Collect extends React.Component{
    // 收藏
    handleCollect(){
        // 接收值 id  ,
        /*
        * 1、根据ID找到新闻
        * 2、查看我的收藏当中是否有该新闻
        *     1、有该新闻，认为你要取消收藏
        *     2、没有该新闻，认为你要添加收藏*/

        // 根据新闻ID得到新闻详情
        var newInfo=JSON.parse(localStorage.newList14).find(v=>v.id===this.props.id);
        // 得到我的收藏
        var collectList=JSON.parse(localStorage.myCollect);// 我的收藏
        // index如果大于-1说明你收藏过
        var index=collectList.findIndex(v=>v.id===this.props.id);
        if(index>-1){
            // 有该新闻
            collectList.splice(index,1);
        }else{
            collectList.push(newInfo);
        }

        localStorage.setItem("myCollect",JSON.stringify(collectList));
    }
    render(){
        return (
            <input type="button" onClick={this.handleCollect.bind(this)} value="收藏"/>
        )
    }
}