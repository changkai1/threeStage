<template>
    <div>
        <!--{{userName}}   {{$route.params.a}}|{{$route.params.b}}-->
        {{userName}}   {{$route.query.a}}|{{$route.query.b}}
    </div>
</template>

<script>
    export default {
        name: "hi",
        data(){
            return {
                userName:"大家好，我来自于HI组件"
            }
        },
        mounted(){
            console.log(this.$route);
        }
    }
</script>

<style scoped>

</style>
