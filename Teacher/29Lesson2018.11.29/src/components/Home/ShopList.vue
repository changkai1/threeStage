<template>
    <div  v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
         <div class="shop-list" v-for="item in shopList">{{item}}</div>
        <!--<div v-if="isLoading"><mt-spinner color="#26a2ff"></mt-spinner></div>-->
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "shop-list",
        data(){
            return {
                loading:true,
                shopList:[],
                pageIndex:0,
                isLoading:false
            }
        },
        methods:{
            loadMore(){
                console.log(121212121212);
                this.isLoading=true;
                this.loading=true;
                axios.get("http://127.0.0.1/getShopList",{
                    params:{
                        pageIndex:++this.pageIndex
                    }
                }).then(({data})=>{
                    this.shopList=this.shopList.concat(data.shopList);
                    this.isLoading=false;
                    this.loading=false;
                })
                console.log(121212);
            }
        }
    }
</script>

<style scoped>
.shop-list{
    height:80px;
    background:green;
    font-size:30px;
    border-bottom:1px solid red;
}
</style>
