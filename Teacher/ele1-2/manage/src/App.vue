<template>
    <!--<div id="app">-->
        <!--&lt;!&ndash;<el-button>默认按钮</el-button>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-button type="primary">主要按钮</el-button>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-button type="success">成功按钮</el-button>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-button type="info">信息按钮</el-button>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-button type="warning">警告按钮</el-button>&ndash;&gt;-->
        <!--&lt;!&ndash;<el-button type="danger" @click="open4">危险按钮</el-button>&ndash;&gt;-->
        <!--&lt;!&ndash;<input type="button" value="关闭与显示" @click="isShow=!isShow">&ndash;&gt;-->
        <!--&lt;!&ndash;<Life v-if="isShow"></Life>&ndash;&gt;-->
        <!--&lt;!&ndash;<img src="./assets/logo.png">&ndash;&gt;-->
        <!--&lt;!&ndash;<router-view/>&ndash;&gt;-->
    <!--</div>-->
    <el-container>
        <el-header>
            <el-row>
                <el-col class="logo" :span="8" :style="{width:isCollapse?'64px':'240px'}">
                    <strong>{{isCollapse?"饿":"饿了么管理系统"}}</strong>
                </el-col>
                <el-col class="tool" :span="8">
                    <i :class="isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left'" @click="isCollapse=!isCollapse"></i>
                </el-col>
                <el-col class="admin-info" :span="8" >
                    <el-dropdown>
                      <span class="el-dropdown-link">
                          <span>{{$store.state.admin.adminName}}</span> <img src="./assets/logo.png" alt="">
                      </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item><span @click="$store.commit('OUT_LOGIN')">退出登陆</span></el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside     :style="{width:isCollapse?'auto':'240px'}">
                <el-menu default-active="1-4-1"
                         class="el-menu-vertical-demo"
                         :collapse-transition="false"

                         :collapse="isCollapse">
                    <!--<el-submenu index="1">-->
                        <!--<template slot="title">-->
                            <!--<i class="el-icon-location"></i>-->
                            <!--<span slot="title">管理员管理</span>-->
                        <!--</template>-->
                        <!--<el-menu-item index="1-1">添加管理员</el-menu-item>-->
                        <!--<el-menu-item index="1-2">查看管理员日志</el-menu-item>-->
                    <!--</el-submenu>-->
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title" @click="$router.push('/addAdmin')">添加管理员</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title" @click="$router.push('/')">查看管理员日志</span>
                    </el-menu-item>

                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import Life from "@/components/Life"
    export default {
        name: 'App',
        components:{
            Life
        },
        methods:{
            open4() {
                this.$message.error('错了哦，这是一条错误消息');
            }
        },
        data(){
            return {
                isShow:true,
                isCollapse:false
            }
        }

    }
</script>

<style>
*{
    padding:0;
    margin:0;
}
    .el-header{
        padding:0;
        height:60px;
        background:#409EFF;
    }
    .logo{
        line-height:60px;
        text-align:center;
        width:240px;
        border-right:1px solid rgba(238,241,146,0.3);
    }
    .logo strong{
        font-size:30px;
        color:#fff;
    }
    .tool{
        font-size:30px;
        color:#fff;
        line-height:60px;
    }
    .admin-info{
        float:right;
        padding-right:20px;
        text-align:right;
        vertical-align:middle;
    }
    .admin-info .el-dropdown{
        vertical-align:middle;
    }
    .admin-info span{
        color:#fff;
        line-height:60px;

    }
    .admin-info img {
        width:40px;
        height:40px;
        border-radius:50%;
        vertical-align:middle;
    }
    .el-table th,.el-table td{
        text-align:center;
    }
</style>
