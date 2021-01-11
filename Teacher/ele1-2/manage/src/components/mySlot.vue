<template>
    <div>
        重新开始{{num}}



        <!--<slot></slot>-->
        <!--我在这里-->
        <!--<slot name="one"></slot>-->
        <!--<slot name="two"></slot>-->
        <!--<slot name="three" userName="1234" :arr="arr"></slot>-->
    </div>
</template>

<script>
    export default {
        name: "my-slot",
        data(){
            return {
                num:1,
                arr:[1,2,3,4]
            }
        },
        methods:{
            test(){
                console.log("你执行到我啦！")
            }
        }
    }
</script>

<style scoped>

</style>
