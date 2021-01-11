<template>
    <div>
        <div>
            {{$store.state.adv.name}}| {{$store.state.goods.name}}
        </div>
        喜欢总数：{{sum}}|{{$store.getters.loveSum}} |{{loveSum}}
        <!--<p v-for="item in $store.state.studyList">-->
            <!--{{item.loveNum}}-->
        <!--</p>-->
        <hr/>
        <!--<Study v-for="item in $store.state.studyList" :studyinfo="item"></Study>-->
        <Study v-for="item in $store.state.studyList" :id="item.id"></Study>
        <!--<router-view></router-view>-->
    </div>
</template>

<script>
    import Study from "@/components/Study";
    import {mapGetters,mapActions} from "vuex";
    export default {
        name: "demo",
        data(){
          return {
              studyList:[
                  {
                      title:"php",
                      day:2
                  },
                  {
                      title:"node",
                      day:5
                  },
                  {
                      title:"vue",
                      day:1
                  }
              ]
          }
        },
        components:{
            Study
        },
        methods:mapActions(["getStudyList"]),
        computed:Object.assign({
            sum(){
                var s=0;
                this.$store.state.studyList.forEach(v=>{
                    s+=v.loveNum;
                });
                return s;
            }
        },mapGetters(["loveSum"])),
        mounted(){
            // console.log(this.$store);

            // this.$store.dispatch("getStudyList",1,2)
            this.getStudyList();
            // this.$store.commit
            console.log(this.$store);
            this.$store.commit("CHANGENAME","你变了")
        }
    }
</script>

<style scoped>

</style>
