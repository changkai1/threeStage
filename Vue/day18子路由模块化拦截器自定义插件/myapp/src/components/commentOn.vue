<template>
    <div class="commentOn">
        <div class="noContent" v-show="contextList.length < 1">暂无留言</div>
        <div class="messList">
            <div class="reply" v-for="item in contextList">
                <p class="replyContent">{{item.context}}</p>
                <p class="operation">
                    <span class="replyTime">{{item.addTime}}</span>
                    <span class="handle">
                        <a href="javascript:;" class="top">0</a>
                        <a href="javascript:;" class="down_icon">9</a>
                        <a href="javascript:;" class="cut">删除</a>
                    </span>
                </p>
            </div>
        </div>
        <div class="page"> 
            <a href="javascript:;">1</a>
        </div>
    </div>
</template>

<script>
// 1.外部引入公共Bus
// import Bus from "@/Bus"
export default {
  data() {
    return {
        contextList:[]
    }
  },
  methods: {
      getweibo(){
            this.$http.get("http://127.0.0.1/getweibo")
            .then(({data})=>{
                this.contextList = data.contextList
            })
      }
  },
  mounted(){
      this.getweibo();
     //1.外部引入的公共Bus 
    //   Bus.$on("getweibo",()=>{
    //       this.getweibo();
    //   });
 
      //2.定义在Vue原型的上Bus  //3.定义在插件里的bus
      this.$bus.$on("getweibo",()=>{
          this.getweibo();
      })
  }
}
</script>

<style scoped>

</style>
