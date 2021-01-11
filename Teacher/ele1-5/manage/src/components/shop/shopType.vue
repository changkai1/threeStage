<template>
    <div>
        <div class="toolbar">
            <el-form :inline="true"class="demo-form-inline">
                <el-form-item label="搜索">
                    <el-input  placeholder="类别"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <!--<el-button type="primary" @click="$refs.shoptype.$data.dialogFormVisible=true">添加店铺类别</el-button>-->
                    <el-button type="primary" @click="dialogFormVisible=true">添加店铺类别</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="shopTypeList" border>
            <el-table-column label="ID" prop="_id"></el-table-column>
            <el-table-column label="店铺类别名称" prop="shopTypeName"></el-table-column>
            <el-table-column label="店铺类别图片">
                <template slot-scope="scope">
                    <div>
                        <img width="100" :src="scope.row.shopTypePic | imgUrl" alt="">
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button  size="mini">编辑{{scope.$index}}</el-button>
                    <el-button  size="mini" type="danger">删除</el-button>
                    <el-button  size="mini" type="primary" @click="openShop(scope.row._id)">添加店铺</el-button>
                </template>
            </el-table-column>

        </el-table>
        <!--<addShopType ref="shoptype"></addShopType>-->
        <!--<addShopType :dialogFormVisible="dialogFormVisible" @changevisible="v=>dialogFormVisible=v"></addShopType>-->
        <addShopType  :getShopType="getShopType" :dialogFormVisible.sync="dialogFormVisible"></addShopType>

        <addShop  :shopId="''" v-if="shopVisible" :typeId="typeId" :shopVisible.sync="shopVisible"></addShop>
    </div>
</template>

<script>
    import addShopType from "./addShopType"
    import addShop from "./addShop"
    export default {
        name: "shop-type",
        data(){
            return {
                typeId:"",
                dialogFormVisible:false,
                shopVisible:false,
                shopTypeList:[]
            }
        },
        methods:{
            fn(v){
                dialogFormVisible=v;
            },
            addShopType(){
                var formdata=new FormData();
                console.log(this.$refs.shopTypeName.$data.currentValue);
                formdata.set("shopTypeName",this.$refs.shopTypeName.$data.currentValue);
                formdata.set("shopTypePic",document.querySelector(".el-upload__input").files[0]);
                this.$ajax.post("/addShopType",formdata)
                    .then(data=>{
                        this.dialogFormVisible=false;
                        if(data.ok===1){
                            this.$message({
                                message: data.msg,
                                type: 'success'
                            });
                        }else{
                            this.$message.error(data.msg);
                        }
                })
                // this.$ajax.post("/ele/addShopType",)
            },
            getShopType(){
                this.$ajax.get("/shopType")
                    .then(data=>{
                        this.shopTypeList=data.shopTypeList;
                })
            },
            openShop(id){
                this.typeId=id;
                this.shopVisible=true
            }
        },
        components:{
            addShopType,
            addShop
        },
        mounted(){
            this.getShopType();
        }
    }
</script>

<style scoped>

</style>
