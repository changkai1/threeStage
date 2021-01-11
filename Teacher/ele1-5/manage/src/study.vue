<template>
    <div>
        <mySlot ref="xixi"></mySlot>
        <input type="button" value="点我呀" @click="fn">
         <div ref="myDiv">
             你是谁？
         </div>
        <input type="text"  ref="userName">






        <!--学习-->
        <!--<mySlot>-->
            <!--<p>鸟语花香</p>-->
            <!--<p slot="one">one</p>-->
            <!--<p slot="two">two</p>-->
            <!--<div slot="three" slot-scope="item">-->
                <!--我的名字叫three {{item.userName}}-->
                <!--<p v-for="v in item.arr">{{v}}</p>-->
            <!--</div>-->
        <!--</mySlot>-->
    </div>
</template>

<script>
    import mySlot from "@/components/mySlot"
    export default {
        name: "study",
        methods:{
            fn(){
                // console.log(this.$refs["myDiv"].innerHTML);
                // console.log(this.$refs["userName"].value);
                // console.log(this.$refs["xixi"].$data.arr);
                // this.$refs["xixi"].$data.num=10;
                this.$refs["xixi"].num=100;
                this.$refs["xixi"].test();
                console.log(this.$refs["xixi"]);
                // console.log(this.$refs["xixi"].$data.num)
            }
        },
        components:{
            mySlot
        }
    }
</script>

<style scoped>

</style>
