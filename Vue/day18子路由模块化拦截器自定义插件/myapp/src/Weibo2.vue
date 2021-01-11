<template>
    <div class="jyArea">
    <!--留言-->
        <takecomment @getweibo="getweibo"></takecomment>
    <!--已留-->
       <commenton :contextList="contextList"></commenton>
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
        getweibo(){
            this.$http.get("http://127.0.0.1/getweibo")
            .then(({data})=>{
                this.contextList = data.contextList
            })
        }
  },
  mounted(){
      this.getweibo();
  }
}
</script>

<style scoped>

</style>
