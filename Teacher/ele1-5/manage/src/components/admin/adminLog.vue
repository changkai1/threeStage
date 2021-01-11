<script src="../../../../../Lession15/lib/vue-filters.js"></script>
<template>
    <div>
        <!--<my :num="num" @changenum="fn"></my>-->
        <!--<my :num="num" @changenum="function(v){num=v}"></my>-->
        <!--<my :num="num" @changenum="v=>num=v"></my>-->
        <!--<my :num="num" @update:changenum="v=>num=v"></my>-->
        <!--<my :num="num" :changenum.sync="num"></my>-->
        <my  :num.sync="num"></my>
        <my :num="num" @update:num="v=>num=v"></my>
        <!--<my  :num="num" @update:num="v=>num=v"></my>-->
        <div class="toolbar">
            <el-form :inline="true"class="demo-form-inline">
                <el-form-item label="审批人">
                    <el-input  placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">

                    <!--<el-select v-model="formInline.region" placeholder="活动区域">-->
                        <!--<el-option label="区域一" value="shanghai"></el-option>-->
                        <!--<el-option label="区域二" value="beijing"></el-option>-->
                    <!--</el-select>-->
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">查询</el-button>
                    <el-button type="primary" @click="dialogFormVisible=true">添加店铺类别</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table
            v-loading="loading"
            :data="adminLogList"
            border
            style="width: 100%">
            <el-table-column
                prop="_id"
                label="id"
            >        </el-table-column>
            <el-table-column
                label="日志时间"
            >
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    {{scope.row.addTime | date}}
                </template>
            </el-table-column>
            <el-table-column
                label="管理员账号"
            >
                <template slot-scope="scope">
                    {{scope.row.adminInfo[0].adminName}}
                </template>
            </el-table-column>
            <el-table-column label="类型">
                <template  slot-scope="scope">
                    {{scope.row.logInfo[0].typeName}}
                </template>
            </el-table-column>
            <el-table-column label="说明" prop="detail">
            </el-table-column>

            <el-table-column label="操作">
                <template slot-scope="scope">
                    <!--<el-button-->
                    <!--size="mini"-->
                    <!--@click="handleEdit(scope.$index, scope.row)">编辑{{scope.$index}}</el-button>-->
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="toolbar">
            <el-pagination
                background
                :current-page.sync="pageIndex"
                @current-change="getAdminLogList"
                layout="prev, pager, next"
                :page-count="pageSum"
                >
            </el-pagination>
        </div>



        <addShopType :dialogFormVisible.sync="dialogFormVisible"></addShopType>
    </div>

</template>

<script>
    import my from "@/components/mySlot"
    import addShopType from "@/components/shop/addShopType"
    export default {
        name: "admin-log",
        components:{
            my,
            addShopType
        },
        data(){
            return {
                dialogFormVisible:false,
                adminLogList:[],
                adminLogEnum:{},
                pageSum:1,
                loading:true,
                num:12,
                pageIndex:1
            }
        },
        methods:{
            fn(v){
                this.num=v;
            },
            handleEdit(){

            },
            handleDelete(id){

                console.log(this.pageIndex);





                this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$ajax.delete("/adminLogList",{
                        params:{
                            id
                        }
                }).then(data=>{
                    if(data.ok===1){
                        this.getAdminLogList(this.pageIndex)
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }else{
                        this.$message({
                            type: 'info',
                            message: '删除失败'
                        });
                    }
                })

            }).catch(() => {
                    this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
            },
            getAdminLogList(pageIndex){
                this.loading=true;
                this.$ajax.get("/getAdminLogList",{
                    params:{
                        pageIndex
                    }
                })
                    .then(data=>{
                        this.loading=false;
                    this.adminLogList=data.adminLogList;
                    this.pageSum=data.pageSum;
                // this.adminLogEnum=data.adminLogEnum;
                 })
            }
        },
        mounted(){
            this.getAdminLogList(1);
        }
    }
</script>

<style scoped>

</style>
