<template>
    <div class="jyArea">
        <!--留言-->
        <takeComment @getweibo="getweibo"></takeComment>
        <!--已留-->
        <commentOn :contextList="contextList"></commentOn>
    </div>
</template>

<script>
    import "../static/style/weibo.css";
    import commentOn from  "@/components/commentOn";
    import takeComment from "@/components/takeComment";
    export default {
        name: "weibo",
        data(){
            return {
                // contextList:[]
            }
        },
        components:{
            commentOn,
            takeComment
        },
        methods:{
            // getweibo(){
            //     this.$http.get("http://127.0.0.1/getweibo")
            //         .then(({data})=>{
            //         this.contextList=data.contextList;
            //     // console.log(data);
            //  })
            // }
        },
        mounted(){
            // this.getweibo()
        }
    }
</script>

<style scoped>

</style>
