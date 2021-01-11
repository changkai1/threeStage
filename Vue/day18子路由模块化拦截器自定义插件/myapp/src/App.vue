<template>
  <div id="app">
      <!-- 全局组件 -->
      <!-- <loading></loading> -->
      <img src="./assets/logo.png">
      <nav>
        <router-link to="/">首页</router-link>
        <router-link to="/study">学习</router-link>
        <router-link to="/adv">广告</router-link>
        <router-link to="/advtype">广告类型</router-link>
        <router-link to="/goods">商品</router-link>
        <router-link to="/shop">店铺</router-link>
      </nav>

      <!-- 1.通过router-view 向子组件传值 -->
      <!-- <router-view :isShow="isShow" str="父组件向子组件传值" @changeisshow="changeIsShow"/> -->
     
      <!-- 2.函数名改变为 update:isShow -->
      <!-- <router-view :isShow="isShow" str="父组件向子组件传值" @update:isShow="changeIsShow"/> -->

      <!-- 3.函数名改为 update:isShow,事件直接写在标签上 -->
      <!-- <router-view :isShow="isShow" str="父组件向子组件传值" @update:isShow="function(v){isShow = v;}"/> -->

      <!-- 4. 函数名改为 update:isShow,事件直接写在标签上，使用箭头函数-->
      <!-- <router-view :isShow="isShow" str="父组件向子组件传值" @update:isShow="(v)=>{isShow = v;}"/> -->
      <!-- <router-view :isShow="isShow" str="父组件向子组件传值" @update:isShow="v=>isShow = v"/> -->

      <!-- 5. 简写形式 sync是一个修饰符。自定义事件为update:isShow  子组件传递事件必须是 update:事件名，父组件接收 :事件名.sync="要修改的父组件的data值" 子组件传过来的值直接修改-->
      <router-view :isShow="isShow" str="父组件向子组件传值" :isShow.sync="isShow"/>
     
     
     
      <div>
        <!-- 啦啦啦小魔仙 -->
      </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      isShow:true
    }
  },
  methods:{
    changeIsShow(value){
      this.isShow = value;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav a{
  color:green;
}
</style>
