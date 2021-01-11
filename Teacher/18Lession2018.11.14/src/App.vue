<template>
  <div id="app">
      <img src="./assets/logo.png">
      <nav>
          <router-link to="/">首页</router-link>
          <router-link to="/study">学习</router-link>
          <router-link to="/adv">广告</router-link>
          <router-link to="/shop">店铺</router-link>
          <router-link to="/goods">商品</router-link>
          <router-link to="/shopType">店铺类别</router-link>
      </nav>
      <!--<router-view :isShow="isShow" @changeisshow="changeIsShow" str="嘻嘻"/>-->
      <!--<router-view :isShow="isShow" @update:isShow="changeIsShow" str="嘻嘻"/>-->
      <!--<router-view :isShow="isShow" @update:isShow="function(v){isShow=v}" str="嘻嘻"/>-->
      <!--<router-view :isShow="isShow" @update:isShow="(v)=>{isShow=v}" str="嘻嘻"/>-->
      <!--<router-view :isShow="isShow" @update:isShow="v=>isShow=v" str="嘻嘻"/>-->
      <!--sync是一个修饰符。  自定义的事件为 update:isShow-->
      <router-view :isShow="isShow" :isShow.sync="isShow" str="嘻嘻"/>
        <div>
            <!--吧啦啦小魔仙-->
        </div>

  </div>
</template>

<script>
export default {

    data(){
        return {
            isShow:true
        }
    },
    methods:{
        // changeIsShow(v){
        //     this.isShow=v;
        // }
    },
  name: 'App'
}
</script>

<style>


    nav a{
        color:green;
    }
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
