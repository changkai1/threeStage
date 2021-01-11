<template>
  <el-form class="login-container" :rules="rules" :model="ruleForm" ref="loginForm">
      <h3>后台管理系统</h3>
      <el-form-item prop="adminName">
          <el-input type="text" placeholder="请输入用户名" v-model="ruleForm.adminName"></el-input>
      </el-form-item>
      <el-form-item prop="passWord">
          <el-input type="password" placeholder="请输入密码" v-model="ruleForm.passWord"></el-input>
      </el-form-item>
      <el-button type="primary" style="width:100%" :loading="isLoading" @click="submitForm('loginForm')">登录</el-button>
  </el-form>
</template>

<script>
// import axios from "axios"
export default {
    name:"login",
    data() {
            var validatepassWord = (rule, value, callback) => {
                if (value.length < 4 || value.length > 10 ) {
                    callback(new Error('密码长度应该为4到10位'));
                }else{
                    callback();
                }
            };
            return {
                ruleForm:{
                    adminName:"",
                    passWord:""
                },
                isLoading:false,
                rules:{
                    adminName:[
                        { required: true, message: '用户名输入有误', trigger: 'blur' }
                    ],
                    passWord:[
                        { required: true, message: '密码输入有误', trigger: 'blur' },
                        { validator: validatepassWord, trigger: 'blur' }
                    ]
                }
            }
    },
    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                // valid 验证成功返回true  失败返回 false
                if( valid ){
                    this.isLoading = true;
                    var _this = this;
                    this.$store.dispatch("login",{
                        adminName:this.ruleForm.adminName,
                        passWord:this.ruleForm.passWord,
                        success(msg){
                            // this发生了变化
                            _this.$message({
                                message: msg,
                                type: 'success'
                            });
                            _this.isLoading = false;
                        },
                        error(msg){
                            _this.$message.error(msg);
                            _this.isLoading = false;
                        }
                    });
                    
                    
                    
                    
                    // 6.axios定义在了原型上
                    // this.$ajax({
                    //     url:"http://127.0.0.1/get",
                    //     method:"get",
                    //     params:{
                    //         a:2,
                    //         b:3
                    //     }
                    // }).then(({data})=>{
                    //     console.log(data);
                    //     this.isLoading = false;
                    // })

                    // 5.post json 不简写
                    // axios({
                    //     url:"http://127.0.0.1/post",
                    //     method:"post",
                    //     data:{
                    //         a:2,
                    //         b:3
                    //     }
                    // }).then(({data})=>{
                    //     console.log(data);
                    // })

                    // 4. get 不简写
                    // axios({
                    //     url:"http://127.0.0.1/get",
                    //     method:"get",
                    //     params:{
                    //         a:2,
                    //         b:3
                    //     }
                    // }).then(({data})=>{
                    //     console.log(data);
                    // })

                    // 3.post  inencoded
                    // axios.post("http:127.0.0.1/post","a=1&b=2",{
                    //     headers:{
                    //         "content-type":"application/x-www-form-urlencoded"
                    //     }
                    // }).then((data)=>{
                    //     console.log(data);
                    // })

                    // 2.post  json
                    // axios.post("http://127.0.0.1/post",{
                    //     adminName:this.ruleForm.adminName,
                    //     passWord:this.ruleForm.passWord
                    // }).then((data)=>{
                    //     console.log(data);
                    // })

                    // 1.get
                    // axios.get("http://127.0.0.1/get",{
                    //     params:{
                    //         adminName:this.ruleForm.adminName,
                    //         passWord:this.ruleForm.passWord
                    //     }
                    // }).then((data)=>{
                    //     console.log(data);
                    // })
                }
            });
        },
    }
}
</script>

<style scoped>

.login-container{
    width:350px;
    margin:150px auto;
    border:1px solid #cccccc;
    padding:35px;
    box-shadow:0 0 10px #cccccc;
}
.login-container h3{
    text-align:center;
}
</style>

