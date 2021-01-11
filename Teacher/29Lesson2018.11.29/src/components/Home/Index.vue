<template>
    <div>
        <input type="button" value="弹呀" @click="fn">
        <ShopType></ShopType>
        <ShopList></ShopList>
    </div>
</template>

<script>
    import ShopType from "./ShopType"
    import ShopList from "./ShopList"
    // import { Toast } from 'mint-ui';
    export default {
        name: "index",
        components:{
            ShopType,
            ShopList
        },
        methods:{
            fn(){
                // Toast('提示信息');
                this.$toast("lkasjd;flkja;sldfjk;alsdk");
            }
        }
    }
</script>

<style scoped>

</style>
