<template>
  <div>
        <div class="toolbar">
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="搜索">
                    <input placeholder="店铺名称" ref="shName" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getShopList">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <!-- 第一种方法 -->
                    <!-- <el-button type="primary" @click="$refs.shopType.dialogFormVisible = true">添加店铺类别</el-button> -->
                    
                    <!-- 第二种方法，父子传值 -->
                    <el-button type="primary" @click="openShopVisible('')">添加店铺</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="shopList" border>
            <el-table-column label="ID" prop="_id"></el-table-column>
            <el-table-column label="店铺名称" prop="shopName"></el-table-column>
            <el-table-column label="所属类别" prop="typeInfo[0].shopTypeName"></el-table-column>
            <el-table-column label="店铺图片" >
                <template slot-scope="scope"> 
                    <img width="50" :src="scope.row.shopPic | imgUrl" alt="">
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="openShopVisible(scope.row._id)">编辑</el-button>
                    <el-button size="mini" type="danger">删除</el-button>
                    <el-button size="mini" type="primary">添加商品</el-button>
                </template>
            </el-table-column>

        </el-table>
        <addshop v-if="shopVisible" :shopId="shopId" :getShopList="getShopList" :shopVisible.sync="shopVisible"></addshop>
  </div>
</template>

<script>
import addshop from "./addShop"
export default {
    name:"shopManage",
    data() {
        return {
            shopVisible:false,
            shopList:[],
            shopId:''
        }
    },
    components: {
        addshop
    },
    methods:{
        getShopList(){
            this.$ajax.get("/getShopList",{
                params:{
                    shopName:this.$refs.shName.value
                }
            }).then(({data})=>{
                this.shopList = data.shopList;
            })
        },
        openShopVisible(id){
            this.shopVisible = true;
            this.shopId = id;
        }
    },
    mounted(){
        this.getShopList();
    }
}
</script>

<style scoped>

</style>
