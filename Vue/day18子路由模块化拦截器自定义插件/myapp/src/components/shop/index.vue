<template>
  <div>
    店铺index组件
  </div>
</template>

<script>
export default {
  name:'shop',
  // 进入组件所在路由之前进行拦截,方法会自动执行
  // to   去哪里
  // from 从哪来
  // next 是否允许继续执行  next() 默认为true,如果设置为false,不允许放行
  beforeRouteEnter(to,from,next){
    // console.log("to",to);
    // console.log("from",from);
    // console.log("to",to.meta);
    if(to.meta.isAuthorization){ //如果为true的话next()
        next();
    }else{
      // next("/");  // 为false的时候跳转到首页
      next({path:'/',query:{a:1,b:2}});
    }
  },

  // 离开路由之前
  // to   去哪里
  // from 从哪来
  // next 是否允许继续执行  next() 默认为true,如果设置为false,不允许放行
  beforeRouteLeave(to,from,next){
    console.log("to",to);
    console.log("from",from);
    next();
  }
}
</script>

<style scoped>

</style>
