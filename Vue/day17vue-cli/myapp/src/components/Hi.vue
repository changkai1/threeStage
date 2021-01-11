<template>
  <div>
      {{message}}
      <!-- 1.跳转使用name，params传值，接收使用params接收 -->
      <!-- {{$route.params.a}}---{{$route.params.b}}   -->

      <!-- 2.跳转使用path，query传值，接收使用query接收 -->
      <!-- {{$route.query.a}}---{{$route.query.b}} -->

      <!-- 3.跳转使用name，query传值，接收使用query接收 -->
      {{$route.query.a}}---{{$route.query.b}}

      {{$route.params.a}}===={{$route.params.b}}

      <!-- 使用矢量图标 -->
      <i class="iconfont iconedit"></i>
      <i class="iconfont iconDND_mode"></i>
      <i class="iconfont iconbluetoothon"></i>
      <i class="iconfont iconbluetoothoff"></i>
  </div>
</template>

<script>
export default {
  name:'Hi',
  data() {
    return {
        message:"来自Hi组件"
    }
  },
  components: {

  },
  mounted(){
    // console.log(this.$route)
  }
}
</script>

<style scoped>
    .iconfont{
      font-size:30px;
    }
</style>
