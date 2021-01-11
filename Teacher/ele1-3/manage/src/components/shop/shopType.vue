<template>
    <div>
        <div class="toolbar">
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="搜索">
                    <el-input  placeholder="类别"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="dialogFormVisible=true">添加店铺类别</el-button>
                </el-form-item>
            </el-form>
        </div>


        <!--<el-dialog title="收货地址" :visible.sync="dialogFormVisible">-->
        <el-dialog title="添加店铺类别" :visible="dialogFormVisible" @update:visible="v=>dialogFormVisible=v">
            <el-form>
                <el-form-item label="类别名称">
                    <el-input ref="shopTypeName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="类别的图片">
                    <el-upload
                        class="upload-demo"
                        ref="upload"
                        action=""
                        :limit="1"
                        :auto-upload="false">
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addShopType" >提交</el-button>
            </div>
        </el-dialog>


    </div>
</template>

<script>
    export default {
        name: "shop-type",
        data(){
            return {
                dialogFormVisible:false
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
            }
        }
    }
</script>

<style scoped>

</style>
