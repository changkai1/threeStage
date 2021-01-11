<template>
<div>
    <div class="toolbar">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="搜索">
                <el-input placeholder="类别"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
            </el-form-item>
            <el-form-item>
                <!-- 第一种方法 -->
                <!-- <el-button type="primary" @click="$refs.shopType.dialogFormVisible = true">添加店铺类别</el-button> -->
                
                <!-- 第二种方法，父子传值 -->
                <el-button type="primary" @click="dialogFormVisible = true">添加店铺类别</el-button>
            </el-form-item>
        </el-form>
    </div>




    <!-- 列表 -->
    <el-table :data="shopTypeList" border>
        <el-table-column label="ID" prop="_id"></el-table-column>
        <el-table-column label="店铺类别名称" prop="shopTypeName"></el-table-column>
        <el-table-column
            label="店铺类别图片">
            <template slot-scope="scope">
                <div>
                    <img width="50" :src="scope.row.shopTypePic | imgUrl" alt="">
                </div>
            </template>
        </el-table-column>
        <el-table-column
            label="时间">
            <template slot-scope="scope">
                {{scope.row.addTime | date}}
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button size="mini">编辑</el-button>
                <el-button size="mini" type="danger">删除</el-button>
                <el-button size="mini" type="primary" @click="addShop(scope.row._id)">添加店铺</el-button>
            </template>
        </el-table-column>
    </el-table>




    <!-- 弹窗 -->
    <!-- 第一种方法 -->
    <!-- <addshoptype ref="shopType"></addshoptype> -->

    <!-- 第二种方法 父组件改变子组件的值-->
    <!-- <addshoptype :dialogFormVisible="dialogFormVisible" @changevisible="v => dialogFormVisible = v"></addshoptype> -->
    <!-- 第二种简写 sync 父组件传值给子组件也可以传父组件的  方法-->
    <addshoptype :getShopTypeList="getShopTypeList" :dialogFormVisible.sync="dialogFormVisible"></addshoptype>

    <addshop :shopId="''" v-if="shopVisible" :typeId="typeId" :shopVisible.sync="shopVisible"></addshop>





    <!-- <el-dialog title="添加店铺类别" :visible.sync="dialogFormVisible">
        <el-form>
            <label for="">类别名称</label>
            <input type="text" ref="shopTypeName" autocomplate="off" />
            <el-form-item label="类别图片">
                <el-upload
                    class="upload-demo"
                    ref="upload"
                    :limit="1"
                    action=""
                    :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addShopType">提 交</el-button>
        </div>
    </el-dialog> -->

</div>
</template>

<script>
import addshoptype from "./addShopType"
import addshop from "./addShop"
export default {
    name:"shoptype",
    data() {
        return {
            dialogFormVisible:false,
            shopTypeList:[],
            shopVisible:false,
            typeId:""
        }
    },
    methods:{
        // addShopType(){
        //     // 上传图片
        //     var formdata = new FormData();
        //     formdata.set("shopTypeName",this.$refs.shopTypeName.value);
        //     formdata.set("shopTypePic",document.querySelector(".el-upload__input").files[0]);
        //     this.$ajax.post("/addShopType",formdata).then(({data})=>{
        //         this.dialogFormVisible = false;
        //         if( data.ok === 1 ){
        //             this.$message({
        //                 type: 'success',
        //                 message: data.msg
        //             });
        //             this.getShopTypeList();
        //         }else{
        //             this.$message({
        //                 type: 'info',
        //                 message: data.msg
        //             });
        //         }
        //     })
        // },
        getShopTypeList(){
            this.$ajax.get("/shopType").then(({data})=>{
                this.shopTypeList = data.shopTypeList;
            })
        },
        addShop(id){
            this.shopVisible = true;
            this.typeId = id;
        }
    },
    mounted(){
        this.getShopTypeList();
    },
    components:{
        addshoptype,
        addshop
    }
}
</script>

<style scoped>

</style>
