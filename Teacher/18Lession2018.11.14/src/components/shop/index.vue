<template>
    <div>
        店铺
    </div>
</template>

<script>
    export default {
        name: "index",
        // 进入组件所在路由之前进行拦截
        // to 去哪里， from 从哪来 next:是否允许继续执行
        // next() 默认为true,如果设为false不允许放行。

        // beforeRouteEnter(to,from,next){
        //    // console.log(to);
        //    // console.log(from);
        //
        //     if(to.meta.isAuthorization){// false
        //         next();
        //     }else{
        //         // next("/");
        //         next({path:'/',query:{a:1,b:2}});
        //     }
        // },
        // // 离开路由之前
        // beforeRouteLeave(to,from,next){
        //     console.log(to);
        //     console.log(from);
        //     next();
        // }
    }
</script>

<style scoped>

</style>
