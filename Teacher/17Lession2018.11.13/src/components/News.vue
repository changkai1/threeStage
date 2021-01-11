<template>
    <div>我是新闻组件

    {{$route.params.id}}|{{$route.params.type}}
        <input type="button" value="HI" @click="fn">

    </div>
</template>

<script>
    export default {
        name: "news",
        methods:{
            fn(){
                // this.$router.push("/hi");
                // this.$router.push("/hi?a=90&b=100");
                // this.$router.push({path:"/hi",query:{a:45,b:98}});
                // this.$router.go(-1);// 返回
            }
        }
    }
</script>

<style scoped>

</style>
