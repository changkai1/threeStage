<template>
  <div class="takeComment">
        <textarea name="textarea" v-model.trim="context" class="takeTextField" id="tijiaoText"></textarea>
        <div class="takeSbmComment">
            <input type="button" class="inputs" value="" @click="addWeibo"/>
        </div>
    </div>
</template>

<script>
// 1.外部引入公共Bus
// import Bus from "@/Bus"
export default {
  data() {
    return {
        context:""
    }
  },
  components: {

  },
  methods:{
      addWeibo(){
          this.$http.post("http://127.0.0.1/addweibo",{
              context:this.context
          }).then(({data})=>{
            //   console.log(data);

            // 1.外部定义的bus
            // Bus.$emit("getweibo")

            // 2.main.js定义在vue原型上的bus  //3.定义在插件里的bus
            this.$bus.$emit("getweibo")
          })
      }
  }
}
</script>

<style scoped>

</style>
