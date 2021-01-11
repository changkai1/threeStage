<template>
  <div>
        <!-- 遍历vuex里的studyList -->
        <!-- <p v-for="item in $store.state.studyList">{{item.loveNum}}</p> -->
        
        <!-- 使用 modules里的state-->
        <div>
            {{$store.state.adv.name}}----{{$store.state.goods.name}}
        </div>

        <!-- vuex中的getters,直接可以调用$store.getters.loveNum(计算属性名) -->
        喜欢总数：{{sum}}---{{$store.getters.loveNum}}---{{loveNum}}
      <hr/>
      我是一个示例
      <!-- 1.第一种 -->
      <!-- <study v-for="item in $store.state.studyList" :studyinfo="item"></study> -->

      <!-- 2.第二种，只传递一个id -->
      <study v-for="item in $store.state.studyList" :id="item.id"></study>




      <!-- 1.使用路由加载的组件展示出来 -->
      <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// 引入组件study
import study from "./components/study"
//getters映射到计算属性当中，actions映射到methods中
import {mapGetters,mapActions} from "vuex"  
export default {
  name:"demo",
  data() {
    return {
        
    }
  },
  components: {
      study    // 引入组件study
  },
  computed:{
      ...mapGetters(["loveNum"]), //直接使用loveNum
      ...{
            sum(){
                var s = 0;
                this.$store.state.studyList.forEach(v => {
                    s += v.loveNum;
                });
                return s;
            }
         }
  },
  mounted(){
    //   console.log(222,this.$store)

    // 执行actions里面的方法,只能传递一个参数
    // this.$store.dispatch("getStudyList",1);

    // 直接调用getStudyList方法
    this.getStudyList();

    // console.log(1111,this.$store)

    // 调用modules里的mutations里的方法
    this.$store.commit("CHANGE","你变了")
  },
  methods:{
      ...mapActions(["getStudyList"])
  }
}
</script>

<style scoped>

</style>
