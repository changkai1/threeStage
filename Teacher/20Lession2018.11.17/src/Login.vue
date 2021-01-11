<template>
    <el-form :model="loginForm" ref="loginForm" class="login-container" :rules="rules">
        <h3>饿了么后台管理系统</h3>
        <el-form-item prop="adminName">
            <el-input ref="adminName" type="text" v-model="loginForm.adminName" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
            <el-input type="password" v-model="loginForm.passWord" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button style="width:100%" :loading="isLoading" type="primary" @click="submitForm('loginForm')">登陆</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    // import axios from "axios";
    export default {
        name: "login",
        data(){
            var validatePass2 = (rule, value, callback) => {
               if(value.length<4 || value.length>10){
                   callback(new Error("请输入4到10位的密码"));
               }else{
                   callback();
               }
                // if (value === '') {
                //     callback(new Error('请再次输入密码'));
                // } else if (value !== this.ruleForm2.pass) {
                //     callback(new Error('两次输入密码不一致!'));
                // } else {
                //     callback();
                // }
            };
            return {
                isLoading:false,
                rules:{
                    adminName:[
                        { required: true, message: '请输入管理员账号', trigger: 'blur' }
                    ],
                    passWord:[
                        { required: true, message: '请输入您的密码', trigger: 'blur' },
                        { validator: validatePass2, trigger: 'blur' }
                        // { min:4,max:10, message: '密码长度为4---10位', trigger: 'blur' }
                    ]
                },
                loginForm:{
                    adminName:"",
                    passWord:""
                }
            }
        },
        methods:{
            submitForm(formName) {
                console.log(this.$refs.adminName.value)
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        this.isLoading=true;
                        // axios   get post put delete
                        /*get*/

                        this.$store.dispatch("login");

                    //     this.$ajax({
                    //         url:"http://127.0.0.1/post",
                    //         method:"post",
                    //         data:"a=4&b=5",
                    //         headers:{
                    //             "content-type":"application/x-www-form-urlencoded"
                    //         }
                    //     }).then(({data})=>{
                    //         console.log(data);
                    //         this.isLoading=false;
                    // })


                        //     axios({
                    //         url:"http://127.0.0.1/post",
                    //         method:"post",
                    //         data:{
                    //             a:2,
                    //             b:3
                    //         }
                    //     }).then(({data})=>{
                    //         console.log(data);
                    // })

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



                    //     axios.post("http://127.0.0.1/post","a=1&b=2",{
                    //         headers:{
                    //             "content-type":"application/x-www-form-urlencoded"
                    //         }
                    //     }).then(({data})=>{
                    //         console.log(data);
                    // })


                        // axios.post("http://127.0.0.1/post",{
                        //     adminName:this.loginForm.adminName,
                        //     passWord:this.loginForm.passWord
                        // }).then(({data})=>{
                        //     console.log(data);
                        // })



                    //     axios.get("http://127.0.0.1/get",{
                    //         params:{
                    //             adminName:this.loginForm.adminName,
                    //             passWord:this.loginForm.passWord
                    //         }
                    //     }).then((data)=>{
                    //         console.log(data);
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
        border:2px solid #eaeaea;
        padding:35px 35px 15px 25px;
        box-shadow:0 0 10px blue;
    }
    .login-container h3{
        text-align:center;
    }
</style>
