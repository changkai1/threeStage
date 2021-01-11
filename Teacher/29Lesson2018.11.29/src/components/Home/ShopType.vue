<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in shopTypeList">
                <div class="shop-type">
                    <div v-for="info in item">{{info}}</div>
                </div>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "shop-type",
        data(){
            return {
                shopTypeList:[]
            }
        },
        mounted(){
            axios.get("http://127.0.0.1/getShopType")
                .then(({data})=>{
                    console.log(data);
                    this.shopTypeList=data.shopTypeList;
            })
        }
    }
</script>

<style scoped>
    .mint-swipe{
        height:40vw;
        background:green;
    }
    .shop-type{
        display:flex;
        flex-wrap:wrap;
    }
    .shop-type div{
        width:20vw;
        height:20vw;
        background:white;
        border:1px solid red;
        box-sizing:border-box;
    }
</style>
