<template>
    <div id="app">
        <!--{{userName}}-->
        <!--<p v-for="item in arr">{{item}}</p>-->


        <img src="./assets/logo.png">
        <nav>
            <router-link to="/">首页</router-link>
            <router-link :to="{path:'/news-45-89'}">news</router-link>
            <!--<router-link :to="{path:'/news/45/89'}">news</router-link>-->
            <router-link :to="{name:'HI',query:{a:6,b:90}}">Hi</router-link>
            <!--<router-link :to="{path:'/hi?a=3&b=4'}">Hi</router-link>-->
            <!--<router-link :to="{name:'HI',params:{a:1,b:2}}">Hi</router-link>-->









            <!--<router-link :to="newsUrl">news</router-link>-->
            <!--<router-link :to="{path:'/news'}">news</router-link>-->
            <!--<router-link :to="{name:'news'}">news</router-link>-->
        </nav>
        <router-view name="one"/>
        ******************************
        <router-view name="News"/>
        ******************************
        <router-view name="Error"/>
        ******************************
        <router-view/>
        ******************************
    </div>
</template>

<script>
    export default {
        name: 'App',
        data(){
            return {
                userName:"laowangtou",
                arr:[1,2,3,4],
                hiUrl:"/hi",
                // newsUrl:{
                //     name:"news"
                // }
                // newsUrl:{
                //     path:"/news"
                // }
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
