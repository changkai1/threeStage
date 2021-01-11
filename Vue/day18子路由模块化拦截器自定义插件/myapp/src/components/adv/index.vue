<template>
  <div v-show="isShow">
    广告-->传值
    {{str}}
    <!-- 点击按钮改变父组件的isShow -->
    <input type="button" value="关闭" @click="changeIsShow"/>
  </div>
</template>

<script>
export default {
  name:'adv',
  props:["str","isShow"],
  data() {
    return {

    }
  },
  components: {

  },
  methods:{
    changeIsShow(){
      this.$emit("update:isShow",false);
    }
  }
}
</script>

<style scoped>
    div{
      color:red;
      width:200px;
      height:200px;
      background:gray;
    }
</style>
