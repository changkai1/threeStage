<template>
  <div>
      我在这里啊
      <!-- 匿名插槽 -->
      <slot></slot>
      <slot name="one"></slot>
      <slot name="two"></slot>
      <slot name="three" userName="1234" :arr="arr"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
        arr:[1,2,3,4]
    }
  },
  components: {

  }
}
</script>

<style scoped>

</style>
