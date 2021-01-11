<template>
    <div id="app">
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger" @click="open4">危险按钮</el-button>
        <!--<input type="button" value="关闭与显示" @click="isShow=!isShow">-->
        <!--<Life v-if="isShow"></Life>-->
        <!--<img src="./assets/logo.png">-->
        <!--<router-view/>-->
    </div>
</template>

<script>
    import Life from "@/components/Life"
    export default {
        name: 'App',
        components:{
            Life
        },
        methods:{
            open4() {
                this.$message.error('错了哦，这是一条错误消息');
            }
        },
        data(){
            return {
                isShow:true
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
