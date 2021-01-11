<template>
    <el-dialog title="添加店铺" :visible="shopVisible" @update:shopVisible="v => $emit('update:shopVisible',v)">
        <el-form>
            <label for="">店铺名称</label>
            <input type="text" ref="shopName" autocomplate="off" />
            <el-form-item label="店铺图片">
                <el-upload
                    class="upload-demo"
                    ref="upload"
                    :limit="1"
                    action=""
                    :on-exceed="exceed"
                    :on-change="upChange"
                    :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                <img v-if="shopPic.length > 0" width="100" :src="shopPic" alt="">
            </el-form-item>
            <el-form-item label="店铺类别">
                <el-select v-model="shopTypeId" placeholder="请选择">
                    <el-option
                        v-for="item in shopTypeList"
                        :key = "item._id"
                        :label = "item.shopTypeName"
                        :value = "item._id"
                    > 
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:shopVisible',false)">取 消</el-button>
            <el-button type="primary" @click="addShop">提 交</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    name:"addShop",
    props:["shopVisible","typeId","getShopList","shopId"],
    data() {
        return {
            shopTypeId:"",
            shopTypeList:[],
            shopInfo:[],
            shopPic:""
        }
    },
    methods:{
        upChange(file){
            console.log(this.$refs.upload)
            this.$refs.upload.clearFiles();
            // 图片转base64
            var reader = new FileReader();
            reader.readAsDataURL(file.raw);
            // 转为base64
            var _this = this;
            reader.onload = function(){
                _this.shopPic = this.result;
                console.log(333,this.result);
            }
            console.log(222,file);
        },
        addShop(){
            // console.log(2222,this.getShopList);
            var formdata = new FormData();
            formdata.set("shopName",this.$refs.shopName.value);
            formdata.set("shopPic",document.querySelector(".el-upload__input").files[0]);
            formdata.set("shopTypeId",this.shopTypeId)
            if(this.shopId.length > 0){ // 修改
                formdata.set("shopId",this.shopId);
                this.$ajax.put("/addShop",formdata).then(({data})=>{
                    if( data.ok === 1 ){
                        this.$emit("update:shopVisible",false);
                        this.$message({
                            type: 'success',
                            message: data.msg
                        });
                        if( this.getShopList ){
                            this.getShopList()
                        }else{
                            this.$router.push("/shopManage");
                        }
                    }else{
                        this.$message({
                            type: 'info',
                            message: data.msg
                        });
                    }
                })
            }else{ // 添加
                this.$ajax.post("/addShop",formdata).then(({data})=>{
                    if( data.ok === 1 ){
                        this.$emit("update:shopVisible",false);
                        this.$message({
                            type: 'success',
                            message: data.msg
                        });
                        if( this.getShopList ){
                            this.getShopList()
                        }else{
                            this.$router.push("/shopManage");
                        }
                    }else{
                        this.$message({
                            type: 'info',
                            message: data.msg
                        });
                    }
                })
            }
            
        },
        exceed(){
            
        },
        getShopType(){
            this.$ajax.get("/shopType").then(({data})=>{
                this.shopTypeList = data.shopTypeList;
            })
        },
        getShopInfoById(){
            this.$ajax.get("/getShopInfoById",{
                params:{
                    shopId:this.shopId
                }
            }).then(({data})=>{
                console.log(data.shopInfo);
                this.$refs.shopName.value = data.shopInfo.shopName;
                this.shopTypeId = data.shopInfo.shopTypeId;
                this.shopPic = "http://127.0.0.1/" + data.shopInfo.shopPic;
            })
        }
    },
    mounted(){
        console.log(111)
        this.getShopType();
        this.shopTypeId = this.typeId;
        if(this.shopId.length > 0){
            this.getShopInfoById();
        }
    }
}
</script>

<style scoped>

</style>
