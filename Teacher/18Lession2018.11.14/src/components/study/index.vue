<template>
    <div>学习的首页，好好学习，天天向上
        <router-link to="/study/java">java</router-link>
        <router-link to="/study/php">php</router-link>
        <router-link to="/study/html">html</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
