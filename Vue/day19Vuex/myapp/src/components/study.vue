<template>
  <div>
        <p>学习的课程：{{studyinfo.title}}</p>
        <p>学习的时间：{{studyinfo.day}}天</p>
        <!-- 1. -->
        <!-- <input type="button" :value="studyinfo.loveNum" @click="changeLoveNum"> -->

        <!-- 2.直接调用映射的函数名 -->
        <input type="button" :value="studyinfo.loveNum" @click="CHANGE_STUDYLIST_ID(studyinfo.id)">
        <hr/>
  </div>
</template>

<script>
// 简写this.$store.state.studyList
// 1.引入vuex
// import vuex from "vuex"

// 2.引入vuex 简写
import {mapState,mapMutations} from "vuex"


export default {
  name:"study",
//   props:["studyinfo"],
  props:["id"],
  data(){
      return{
          studyinfo:[]
      }
  },
  // 1.第一中引入vuex的computed形式
//   computed:Object.assign(vuex.mapState(["studyList"]),{
//         // 可以接着写计算属性
//         sum(){
//             return 13;
//         }
//   }),

  // 2.第二种引入vuex的computed的形式
//   computed:Object.assign(mapState(["studyList"]),{
//         // 可以接着写计算属性
//         sum(){
//             return 13;
//         }
//   }),

   // 3.第二种 第二种引入vuex的computed的形式  合并对象的简写形式
  computed:{
      ...mapState(["studyList"]),
    // 还可以是下面写法
    //   ...mapState({
    //       study(v){
    //           return v.studyList
    //       }
    //   }),
      ...{
          sum(){
              var s = 0;
              this.studyList.forEach(v => {
                  s += v.loveNum;
              });
              return s;
          }
      }
  },
  methods:{
      ...mapMutations(["CHANGE_STUDYLIST_ID"]), //直接使用函数名就可以
      ...{
            changeLoveNum(){
                //   this.studyinfo.loveNum++;

                // 在store里集中修改数据
                // this.$store.commit("CHANGE_STUDYLIST_ID",this.id);

                // this.CHANGE_STUDYLIST_ID(this.id);
            }
      }
  },
  mounted(){
    //   1.第一种
    //   this.studyinfo = this.$store.state.studyList.find(v=>v.id === this.id);
    
    //   2.第二种
    this.studyinfo = this.studyList.find(v=>v.id === this.id);

    // 执行mutations下的方法,第一个参数:方法名  第二个参数:传值(只能传递一个),传多个值要使用对象
    // this.$store.commit("CHANGE_STUDYLIST_ID","5678");
  }
}
</script>

<style scoped>

</style>
