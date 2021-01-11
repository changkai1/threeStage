<template>
    <!-- 弹窗 -->
    <!-- <el-dialog title="添加店铺类别" :visible.sync="dialogFormVisible"> -->
        <!-- 第二种方法 不简写 -->
    <!-- <el-dialog title="添加店铺类别" :visible="dialogFormVisible" @update:visible="v => $emit('changevisible',v)"> -->
        <!-- 第二种方法 简写sync -->
    <el-dialog title="添加店铺类别" :visible="dialogFormVisible" @update:visible="v => $emit('update:dialogFormVisible',v)">
        <el-form>
            <label for="">类别名称</label>
            <input type="text" ref="shopTypeName" autocomplate="off" />
            <el-form-item label="类别图片">
                <el-upload
                    class="upload-demo"
                    ref="upload"
                    :limit="1"
                    action=""
                    :on-exceed="exceed"
                    :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:dialogFormVisible',false)">取 消</el-button>
            <el-button type="primary" @click="addShopType">提 交</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    props:["dialogFormVisible","getShopTypeList"], // 可以接受子组件传过来的方法
    data() {
        return {
            // dialogFormVisible:false
        }
    },
    methods:{
        addShopType(){
            // 上传图片
            var formdata = new FormData();
            formdata.set("shopTypeName",this.$refs.shopTypeName.value);
            formdata.set("shopTypePic",document.querySelector(".el-upload__input").files[0]);
            this.$ajax.post("/addShopType",formdata).then(({data})=>{
                // this.dialogFormVisible = false;
                this.$emit("update:dialogFormVisible",false);
                // 清空文本框和上传的图片
                this.$refs.upload.clearFiles() //清除上传的图片
                this.$refs.shopTypeName.value = ""
                if( data.ok === 1 ){
                    this.$message({
                        type: 'success',
                        message: data.msg
                    });
                    this.getShopTypeList(); // 运行的是子组件传递过来的方法
                }else{
                    this.$message({
                        type: 'info',
                        message: data.msg
                    });
                }
            })
        },
        exceed(){
            this.$message.error("您已经上传了图片");
        }
    }
}
</script>

<style scoped>

</style>
