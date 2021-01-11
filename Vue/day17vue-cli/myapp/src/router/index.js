import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import News from '@/components/News'
import Error from '@/components/Error'
Vue.use(Router)

export default new Router({
  mode:"history", //取出#号
  routes: [
    {
      path: '/',             //路由的地址
      name: 'HelloWorld',    //路由的名称
      alias:'/home',
      // component: HelloWorld  //路由所需要的组件
      components:{
        one:Hi,
        News,
        Error,
        default:HelloWorld   // <router-view/>的name值没有时，默认使用HellowWorld
      },
      meta:{
        title:"首页"
      }
    },
    {
      path:'/red',
      redirect:'/'         //重定向
    },
    {
      path:'/Hi',
      name:'Hi',
      component:Hi,
      meta:{
        title:"Hi"
      }
    },
    {
      path:'/News/:id/:type',
      name:'News',
      component:News,
      meta:{
        title:"News"
      }
    },
    {
      path:'*',  //路由找不到合适的时候，会走该路由
      component:Error
    }
  ]
})














