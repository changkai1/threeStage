<template>
    <div class="commentOn">
        <div class="noContent" v-show="contextList.length<1">暂无留言</div>
        <div class="messList">
            <div class="reply" v-for="item in contextList">
                <p class="replyContent">{{item.context}}</p>
                <p class="operation">
                    <span class="replyTime">2017.7.30</span>
                    <span class="handle">
                    	<a href="javascript:;" class="top">0</a>
                        <a href="javascript:;" class="down_icon">9</a>
                        <a href="javascript:;" class="cut">删除</a>
                    </span>
                </p>
            </div>
        </div>
        <div class="page">
            <a href="javascript:;" class="active">1</a>
            <a href="javascript:;">2</a>
            <a href="javascript:;">3</a>
        </div>
    </div>
</template>

<script>
    // import Bus from "@/Bus";
    export default {
        name: "comment-on",
        props:["bus"],
        // props:["contextList"],
        data(){
            return {
                contextList:[]
            }
        },
        methods:{
            getweibo(){
                this.$http.get("http://127.0.0.1/getweibo")
                    .then(({data})=>{
                    this.contextList=data.contextList;
                // console.log(data);
            })
            }
        },
        mounted(){
            this.getweibo();
            this.$bus.$on("getweibo",()=>{
                this.getweibo();
            })
            // console.log(111111,this.bus);
            // console.log(222222,Bus);
            // console.log(this.bus===Bus);//true
        }
    }
</script>

<style scoped>

</style>
