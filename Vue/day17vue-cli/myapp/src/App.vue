<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- {{username}} -->
    <nav>
      <!-- <router-link to="/">首页</router-link> -->
      <!-- <router-link to="/Hi">Hi</router-link> -->
      <!-- <router-link :to="hiUrl">Hi</router-link> -->
      <!-- <router-link :to="newUrl">News</router-link> -->
      <!-- <router-link :to="{path:'/News'}">News</router-link> -->
      <!-- <router-link :to="{path:'/Hi'}">Hi</router-link>
      <router-link :to="{path:'/News'}">News</router-link> -->
      
      <!-- 路由的传值 -->
      <router-link to="/">首页</router-link>
      <!-- <router-link :to="{name:'Hi',params:{a:1,b:2}}">Hi</router-link> -->
      <!-- <router-link :to="{path:'/Hi',query:{a:6,b:90}}">Hi</router-link> -->
      <router-link :to="{name:'Hi',query:{a:8,b:100}}">Hi</router-link>

      <router-link :to="{path:'/News/45/89'}">News</router-link>
    </nav>


    <router-view name="one"/>
    ***************************
    <router-view name="News"/>
    ***********************
    <router-view name="Error"/>
    **************************
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
    data(){
      return{
        username:"laowang",
        hiUrl:"/Hi",
        newUrl:{
          path:"/News"
        }
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
</style>
