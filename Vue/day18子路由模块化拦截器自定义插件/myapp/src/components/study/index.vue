<template>
  <div>
        好好学习，天天向上
        <router-link to="/study/htm">htm</router-link>
        <router-link to="/study/php">php</router-link>
        <router-link to="/study/java">java</router-link>
        <router-view/>
  </div>
</template>

<script>
export default {
  name:"study",
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>

</style>
