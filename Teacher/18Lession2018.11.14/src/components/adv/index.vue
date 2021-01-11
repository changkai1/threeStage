<template>
    <div v-show="isShow">
        {{str}}
        <input type="button" value="关闭" @click="fn">
    </div>
</template>

<script>
    export default {
        props:["str","isShow"],
        name: "index",
        methods:{
            fn(){
                this.$emit("update:isShow",false);
            }
        }
    }
</script>

<style scoped>
    div{
        color:red;
        width:300px;
        height:300px;
        background:grey;
    }
</style>
