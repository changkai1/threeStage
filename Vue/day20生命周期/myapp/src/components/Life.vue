<template>
  <div>
      <input type="text" v-model="userName">
      {{userName}}{{num}}
  </div>
</template>

<script>
export default {
  name:'life',
  data() {
    return {
        userName:"走不走你都在这里",
        num:0,
        timer:""
    }
  },
  methods:{
      fn(){
          console.log(this.userName)
      }
  },
  beforeCreate(){
    console.group("beforeCreate*************");
    console.log(this.$el);       //undefined
    console.log(this.userName);  //undefined
    console.log(this.fn);        //undefined
    console.groupEnd();
  },
  created(){
    console.group("create*************");
    console.log(this.$el);       //undefined
    console.log(this.userName);  //走不走你都在这里
    console.log(this.fn);        // fn(){}
    this.timer = setInterval(()=>{
        this.num++;
        console.log(this.num)
    },1000)

    console.groupEnd();
  },
  beforeMount(){
    console.group("beforeMount*************");
    console.log(this.$el);       //undefined
    console.log(this.userName);  //走不走你都在这里
    console.log(this.fn);        //fn(){}
    console.groupEnd();
  },
  mounted(){
    console.group("mounted*************");
    console.log(this.$el);       // 挂载到div上了
    console.log(this.userName);  // 走不走你都在这里
    console.log(this.fn);        // fn(){}
    console.groupEnd();
  },
  beforeUpdate(){
    console.group("beforeUpdate*************");
    console.log(this.$el.innerHTML); //更新前的内容
    console.log(this.userName);      //走不走你都在这里
    console.log(this.fn);            //fn(){}
    console.groupEnd();
  },
  updated(){
    console.group("updated*************");
    console.log(this.$el.innerHTML); // 更新后的内容
    console.log(this.userName);      // 走不走你都在这里
    console.log(this.fn);            // fn(){}
    console.groupEnd();
  },
  beforeDestroy(){
    console.group("beforeDestroy*************");
    console.log(this.$el);       //
    console.log(this.userName);  //
    console.log(this.fn);        // 
    clearInterval(this.timer);
    console.groupEnd();
  },
  destroyed(){
    console.group("destroyed*************");
    console.log(this.$el);       //
    console.log(this.userName);  //
    console.log(this.fn);        // 
    console.groupEnd();
  }
}
</script>

<style scoped>

</style>
