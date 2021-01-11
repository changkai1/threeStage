<template>
  <div id="app">
      <NavBar v-if="$route.meta.isShow"></NavBar>
    <router-view/>
  </div>
</template>

<script>
    import NavBar from "./components/common/NavBar"
    import axios from "axios";
export default {
  name: 'App',
    components:{
      NavBar
    },
    mounted(){
      // console.log(this.$route.meta);


        axios.post("http://127.0.0.1/token",{

        },{
            // headers:{
            //     authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZUlkIjoiMTIxMjEyIiwiZXhwIjoxNTQzNDg5NTY4NTE5fQ.FvqMiahBl96LVQ9pIz7FcEDtRkrUxQk36oFX3UOieTo"
            // }
        }).then(({data})=>{
            console.log(data);
    })



      //   axios.get("http://127.0.0.1/token",{
      //       headers:{
      //           authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZUlkIjoiMTIxMjEyIiwiZXhwIjoxNTQzNDg5NTY4NTE5fQ.FvqMiahBl96LVQ9pIz7FcEDtRkrUxQk36oFX3UOieTo"
      //       }
      //   }).then(({data})=>{
      //       console.log(data);
      //   })
    }
}
</script>

<style>
    *{
        padding:0;
        margin:0;
    }
</style>
