<template>
    <div>
        <div class="toolbar">
            <el-form :inline="true"class="demo-form-inline">
                <el-form-item label="搜索">
                    <el-input  placeholder="店铺"  ref="shopName"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getShopList">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <!--<el-button type="primary" @click="$refs.shoptype.$data.dialogFormVisible=true">添加店铺类别</el-button>-->
                    <el-button type="primary" @click="openShopVisible('')">添加店铺</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="shopList" border>
            <el-table-column label="ID" prop="_id"></el-table-column>
            <el-table-column label="店铺名称" prop="shopName"></el-table-column>
            <el-table-column label="所属类别" prop="typeInfo[0].shopTypeName"></el-table-column>
            <el-table-column label="店铺图片">
                <template slot-scope="scope">
                    <img width="100" :src="scope.row.shopPic | imgUrl" alt="">
                </template>
            </el-table-column>
            <el-table-column label="操作" width="500">
                <template slot-scope="scope">
                    <el-button  size="mini" @click="openShopVisible(scope.row._id)">编辑</el-button>
                    <el-button  size="mini" type="danger">删除</el-button>
                    <el-button  size="mini" type="primary" >添加商品</el-button>
                    <el-button  size="mini" type="primary" >添加商品类别</el-button>
                </template>
            </el-table-column>
        </el-table>
        <addShop v-if="shopVisible" :shopId="shopId" :getShopList="getShopList" :shopVisible.sync="shopVisible"></addShop>
    </div>
</template>

<script>
    import addShop from "./addShop"
    export default {
        name: "shop-manage",
        data(){
            return {
                shopVisible:false,
                shopList:[],
                shopId:""// 店铺的ID号
            }
        },
        components:{
            addShop
        },
        methods:{
            openShopVisible(id){
                this.shopVisible=true;
                this.shopId=id;
            },
            getShopList(){
                this.$ajax.get("/getShopList",{
                    params:{
                        shopName:this.$refs["shopName"].$data.currentValue
                    }
                })
                    .then(data=>this.shopList=data.shopList)
            }
        },
        mounted(){
            this.getShopList();
        }
    }
</script>

<style scoped>

</style>
