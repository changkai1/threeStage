<template>
  <div>
      重新开始{{num}}
  </div>
</template>

<script>
export default {
    name:"myref",
    data() {
        return {
            arr:[1,2,3,4],
            num:1
        }
    },
    methods:{
        fn(){
            console.log("执行到了myref")
        }
    },
    components: {

    }
}
</script>

<style scoped>

</style>
