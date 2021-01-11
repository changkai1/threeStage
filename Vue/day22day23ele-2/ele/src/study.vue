<template>
  <div>
    学习
    <myslot>
        <p>鸟语花香</p>
        <p slot="one">花好月圆one</p>
        <p slot="two">天地人和two</p>
        <!-- 子组件slot的属性，都放在了item中 -->
        <div slot="three" slot-scope="item">
          我的名字叫three{{item.userName}}
          <p v-for="(v,index) in item.arr" :key="index">
              {{v}}
          </p> 
        </div>
    </myslot>

    <myref ref="xixi"></myref>
    <input type="button" value="点我啊" @click="fn">
    <div ref="myDiv">
      你是谁？
    </div>
    <input type="text" ref="userName">

  </div>
</template>

<script>
import myslot from "@/components/mySlot"
import myref from "@/components/myRef"
export default {
    data() {
        return {

        }
    },
    components: {
        myslot,
        myref
    },
    methods:{
        fn(){
          console.log(this.$refs.myDiv.innerHTML)
          console.log(this.$refs["myDiv"].innerHTML)
          console.log(this.$refs.userName.value)
          console.log(this.$refs["xixi"])
          console.log(this.$refs["xixi"].$data.arr) //执行的是myref组件里data数据里的arr
          console.log(this.$refs["xixi"].arr) //执行的是myref组件里data数据里的arr
          this.$refs["xixi"].fn() //执行的是myref组件里methods方法里的fn
          this.$refs["xixi"].num = 10;
        }
    }
}
</script>

<style scoped>

</style>
