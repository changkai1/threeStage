<template>
  <div id="app">
    <img src="./assets/logo.png">
    <input type="button" value="显示与关闭" @click="isShow = !isShow">
    <Life v-if="isShow"></Life>
    <router-view/>
  </div>
</template>

<script>
import Life from "@/components/Life"
export default {
  name: 'App',
  data(){
    return{
      isShow:"false"
    }
  },
  components:{
    Life
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
