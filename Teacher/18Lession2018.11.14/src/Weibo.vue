<template>
    <div class="jyArea">
        <!--留言-->
        <takeComment></takeComment>
        <!--已留-->
        <commentOn :bus="Bus"></commentOn>
    </div>
</template>

<script>
    import "../static/style/weibo.css";
    import commentOn from  "@/components/commentOn";
    import takeComment from "@/components/takeComment";

    import Bus from "@/Bus";


    export default {
        name: "weibo",
        data(){
          return {
              Bus
          }
        },
        components:{
            commentOn,
            takeComment
        }
    }
</script>

<style scoped>

</style>
