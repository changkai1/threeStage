<script src="../../../../../Lession15/lib/vue-filters.js"></script>
<template>
    <el-table
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
                {{adminLogEnum[scope.row.logType]}}
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
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "admin-log",
        data(){
            return {
                adminLogList:[],
                adminLogEnum:{}
            }
        },
        methods:{
            handleEdit(){

            },
            handleDelete(){

            }
        },
        mounted(){
            this.$ajax.get("/getAdminLogList")
                .then(data=>{
                    this.adminLogList=data.adminLogList;
                    this.adminLogEnum=data.adminLogEnum;
            })
        }
    }
</script>

<style scoped>

</style>
