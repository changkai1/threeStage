<template>
    <el-table
        :data="adminLogList"
        style="width: 100%"
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
            label="类型"
            prop="logType">
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
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    name:"addminlog",
    data() {
        return {
            adminLogList:[]
        }
    },
    methods:{
        handleDelete(index,item){
            console.log(index,item)
        }
    },
    mounted(){
        this.$ajax.get("/getAdminLogList")
        .then(({data})=>{
            this.adminLogList = data.adminLogList;
        })
    }
}
</script>

<style scoped>

</style>
