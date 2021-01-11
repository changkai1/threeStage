<template>
    <div class="jyArea">
    <!--留言-->
        <takecomment></takecomment>
    <!--已留-->
       <commenton></commenton>
    </div>
</template>

<script>
// 引入外部样式
import './assets/style/weibo.css'
import takecomment from '@/components/takeComment'
import commenton from '@/components/commentOn'
export default {
  data() {
    return {
        contextList:[]
    }
  },
  components: {
      takecomment,
      commenton
  },
  methods:{
        
  },
  mounted(){
     
  }
}
</script>

<style scoped>

</style>
