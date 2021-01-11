<template>
  <el-container>
      <el-header>
          <el-row>
            <el-col class="logo" :span="8" :style="{width:isCollapse?'64px' : '240px'}">
                <strong>{{ isCollapse ? '饿' : '饿了么管理系统'}}</strong>
            </el-col>
            <el-col :span="8" class="tool">
                <i :class="isCollapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'" @click="isCollapse = !isCollapse"></i>
            </el-col>
            <el-col class="admin-info" :span="8">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <span>{{$store.state.admin.adminName}}</span><img src="./assets/logo.png" alt="">
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item><span @click="$store.commit('OUT_LOGIN')">退出登录</span></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
          </el-row>
      </el-header>
      <el-container>
        <el-aside :style="{width:isCollapse ? 'auto' : '240px'}">
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
                :collapse-transition="false"
                :collapse="isCollapse">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-s-check"></i>
                        <span slot="title">管理员管理</span>
                    </template>
                        <el-menu-item index="1-1">添加管理员</el-menu-item>
                        <el-menu-item index="1-2">查看管理员日志</el-menu-item>
                </el-submenu>
                <el-menu-item index="2" @click="$router.push('/addAdmin')">
                    <i class="el-icon-menu"></i>
                    <span slot="title">添加管理员</span>
                </el-menu-item>
                 <el-menu-item index="3" @click="$router.push('/')">
                    <i class="el-icon-menu"></i>
                    <span slot="title">查看管理员日志</span>
                </el-menu-item>
                <el-menu-item index="4" @click="$router.push('/shopType')">
                    <i class="el-icon-menu"></i>
                    <span slot="title">店铺类别管理</span>
                </el-menu-item>
                <el-menu-item index="5" @click="$router.push('/shopManage')">
                    <i class="el-icon-menu"></i>
                    <span slot="title">店铺管理</span>
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
export default {
    name: 'App',
    data(){
      return{
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
  text-align:center;
  line-height:60px;
  width:240px;
  border:1px solid rgba(238,241,146,0.3)
}
.logo strong{
  color:#ffffff;
  font-size:30px;
}
.tool{
  color:#ffffff;
  line-height:60px;
  font-size:30px;
}
.admin-info{
  /* background:yellow; */
  float:right;
  text-align:right;
  padding-right:20px;
}
.admin-info .el-dropdown img{
    width:40px;
    height:40px;
    border-radius: 50%;
    vertical-align: middle;
}
.admin-info .el-dropdown{
  line-height: 60px;
}
.admin-info .el-dropdown span{
  color:#ffffff;
  padding-right:10px;
}
.el-table td,.el-table th{
  text-align: center;
}
</style>
