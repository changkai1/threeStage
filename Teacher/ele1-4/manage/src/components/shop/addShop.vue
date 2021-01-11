<template>
    <el-dialog title="添加店铺" :visible="shopVisible" @update:visible="v=>$emit('update:shopVisible',v)">
        <el-form>
            <el-form-item label="店铺名称">
                <el-input ref="shopName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="店铺图片">
                <el-upload
                    class="upload-demo"
                    ref="upload"
                    action=""
                    :limit="1"
                    :on-exceed="exceed"
                    :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                <img v-if="shopPic.length>0" width="200" :src="shopPic | imgUrl" alt="">
            </el-form-item>
            <el-form-item label="店铺类别">
                <el-select v-model="shopTypeId" placeholder="请选择">
                    <el-option
                        v-for="item in shopTypeList"
                        :key="item._id"
                        :label="item.shopTypeName"
                        :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:shopVisible',false)">取 消</el-button>
            <el-button type="primary" @click="addShop" >提交</el-button>
        </div>
    </el-dialog>

</template>

<script>
    export default {
        props:["shopVisible","typeId","getShopList","shopId"],
        name: "add-shop",
        data(){
          return {
              shopTypeId:"5bf4bce659877032ec4ac595",
              shopTypeList:[],
              shopPic:""
          }
        },
        methods:{
            addShop(){


                var formdata=new FormData();
                formdata.set("shopName",this.$refs.shopName.$data.currentValue);
                formdata.set("shopPic",document.querySelector(".el-upload__input").files[0]);
                formdata.set("shopTypeId",this.shopTypeId);

                if(this.shopId.length>0){// 修改
                    formdata.set("shopId",this.shopId);
                    this.$ajax.put("/addShop",formdata)
                        .then(data=>{
                        if(data.ok===1){
                        this.$emit('update:shopVisible',false);

                        this.$message({
                            message: data.msg,
                            type: 'success'
                        });
                        if(this.getShopList)
                            this.getShopList();
                        else
                            this.$router.push("/shopManage");
                    }else{
                        this.$message.error(data.msg);
                    }
                    })
                }else{
                    // 添加
                    this.$ajax.post("/addShop",formdata)
                        .then(data=>{
                        if(data.ok===1){
                        this.$emit('update:shopVisible',false);

                        this.$message({
                            message: data.msg,
                            type: 'success'
                        });
                        if(this.getShopList)
                            this.getShopList();
                        else
                            this.$router.push("/shopManage");
                    }else{
                        this.$message.error(data.msg);
                    }
                })
                }

            },
            exceed(){

            },
            getShopType(){
                this.$ajax.get("/shopType")
                    .then(data=>this.shopTypeList=data.shopTypeList)
            },
            getShopInfo(){
                this.$ajax.get("/getShopInfoById",{
                    params:{
                        shopId:this.shopId
                    }
                })
                    .then(data=>{
                        //
                        this.$refs.shopName.$data.currentValue=data.shopInfo.shopName;
                        this.shopTypeId=data.shopInfo.shopTypeId;
                        this.shopPic=data.shopInfo.shopPic;
                })
            }
        },
        mounted(){
            console.log(1212121212);
            this.getShopType();
            this.shopTypeId=this.typeId;
            if(this.shopId.length>0){
                this.getShopInfo();
            }
        }
    }
</script>

<style scoped>

</style>
