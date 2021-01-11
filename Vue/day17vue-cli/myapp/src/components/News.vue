<template>
  <div>
      {{message}}
      {{$route.params.id}}----{{$route.params.type}}
      <input type="button" value="HI" @click="fn"/>

  </div>
</template>

<script>
export default {
  name:"News",
  data() {
    return {
        message:"来自News组件"
    }
  },
  components: {

  },
  methods:{
    fn(){
      // 1.跳转到hi组件，不传值
      // this.$router.push("/Hi");

      // 2.跳转到hi组件，传值直接在路径上传
      // this.$router.push("/Hi?a=90&b=100");

      // 3.跳转到hi组件，路径path,query传值
      // this.$router.push({path:"/Hi",query:{a:45,b:90}});

      // 4.跳转到hi组件，路径name,query传值
      // this.$router.push({name:"Hi",query:{a:100,b:200}});

      // 5.跳转到hi组件，路径name,params传值
      // this.$router.push({name:"Hi",params:{a:300,b:400}});

      //6.返回上一个路由中
      this.$router.go(-1);
    }
  },
  mounted(){
    // console.log(111,this.$route)
  }
}
</script>

<style scoped>

</style>
