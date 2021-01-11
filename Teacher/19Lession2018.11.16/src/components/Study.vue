<template>
    <div>
        <p>学习的课程：{{studyinfo.title}}</p>
        <p>学习的时间：{{studyinfo.day}}天</p>
        <!--<p><input type="button" :value="studyinfo.loveNum" @click="changeLoveNum"></p>-->
        <!--<p><input type="button" :value="studyinfo.loveNum" @click="$store.commit('CHANGE_STUDYLIST_ID',studyinfo.id)"></p>-->
        <p><input type="button" :value="studyinfo.loveNum" @click="CHANGE_STUDYLIST_ID(studyinfo.id)"></p>
        <hr/>
    </div>
</template>

<script>
    import {mapState,mapMutations} from "vuex";
    export default {
        name: "study",
        // props:["studyinfo"],
        props:["id"],
        data(){
            return {
                studyinfo:{}
            }
        },
        // computed:vuex.mapState(["studyList"]),//this.$store.state.studyList
        // computed:Object.assign(mapState(["studyList"]),{
        //     sum(){
        //         return 13;
        //     }
        // }),//this.$store.state.studyList
        computed:{
            // ...mapState(["studyList"]),
            ...mapState({
                study(v){
                    // console.log(v);
                    return v.studyList
                }
            }),
            ...{
                sum(){
                    var s=0;
                    this.study.forEach(v=>{
                        s+=v.loveNum;
                    })
                    return s;
                }
            }
        },
        methods:{
            ...mapMutations(["CHANGE_STUDYLIST_ID"]),
            ...{
                changeLoveNum(){
                    this.$store.commit("CHANGE_STUDYLIST_ID",this.id)
                    // this.studyinfo.loveNum+=1;
                }
            }

        },
        mounted(){
            // this.studyinfo=this.$store.state.studyList.find(v=>v.id===this.id);
            // this.studyinfo=this.studyList.find(v=>v.id===this.id);
            // console.log(this.study);
            this.studyinfo=this.study.find(v=>v.id===this.id);
            // 执行mutations下的方法
            // this.$store.commit("CHANGE_STUDYLIST_ID");

        },

    }
</script>

<style scoped>

</style>
