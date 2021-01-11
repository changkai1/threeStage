<template>
<div>
    <div class="toolbar">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <!-- <el-select v-model="formInline.region" placeholder="活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select> -->
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
                <el-button type="primary" @click="dialogFormVisible = true">添加店铺类别</el-button>
            </el-form-item>
        </el-form>
    </div>
    <el-table
        :data="adminLogList"
        style="width: 100%"
        v-loading="loading"
        :border="true">
       <el-table-column
            label="Id">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row._id }}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="管理员名称">
            <template slot-scope="scope">
                {{ scope.row.adminInfo[0].adminName }}
            </template>
        </el-table-column>
        <el-table-column
            label="登录时间">
            <template slot-scope="scope">
                {{ scope.row.addTime | date }}
            </template>
        </el-table-column>
        <el-table-column
            label="类型">
            <template slot-scope="scope">
                {{ scope.row.logInfo[0].typeName }}
            </template>
        </el-table-column>
        <el-table-column
            label="说明"
            prop="detail">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <!-- <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
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
            layout="prev, pager, next"
            @current-change="getAdminLogList"
            :page-count="pageSum">
        </el-pagination>
    </div>

    <addshoptype  :dialogFormVisible.sync="dialogFormVisible"></addshoptype>
</div>
</template>

<script>
import addshoptype from "../shop/addShopType"
export default {
    name:"addminlog",
    data() {
        return {
            adminLogList:[],
            formInline:"",
            pageSum:1,
            loading:true,
            pageIndex:1,
            dialogFormVisible:false
        }
    },
    methods:{
        handleDelete(id){
            // console.log(this.pageIndex);
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$ajax.delete("/adminLogList",{
                    params:{
                        id
                    }
                }).then(({data})=>{
                    if(data.ok === 1){
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.getAdminLogList(this.pageIndex);
                    }else{
                        this.$message({
                            type: 'info',
                            message: '删除失败!'
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
            this.loading = true;
            this.$ajax.get("/getAdminLogList",{
                params:{
                    pageIndex
                }
            })
            .then(({data})=>{
                // console.log(data)
                this.loading = false;
                this.adminLogList = data.adminLogList;
                this.pageSum = data.pageSum;
            })
        }
    },
    mounted(){
        this.getAdminLogList(1);
    },
    components: {
        addshoptype
    }
}
</script>

<style scoped>
.toolbar{
    background: #f4f4f4;
    padding:10px;
    margin:10px;
}
.toolbar .el-form-item{
    margin-bottom:0;
}
</style>
