import Vue from 'vue'
import Router from 'vue-router'
// @ 代表的src根目录
import HelloWorld from '@/components/HelloWorld'
import Hi from "@/components/Hi"
import News from "@/components/News"
import Error from "@/components/Error"

Vue.use(Router)

export default new Router({
    mode:"history",
    routes: [
        {
            path:"*",// 当你的路由找不到适合的时候，会走该路由
            component:Error
        },
        {// 每一个路由其实就是一个对象  。当你的地址为/时，会将HelloWorld组件放到你的占位符当中进行渲染。
            path: '/',                 // 路由的地址
            name: 'HelloWorld',       // 路由的名称

            alias:"/home",
            // component: HelloWorld,      // 路由所需要的组件
            components:{
                one:Hi,
                News,
                Error,
                default:HelloWorld
            }
        },
        {
            path:"/hi",
            name:"HI",
            component:Hi
        },
        {
            path:"/news-:id-:type",
            name:"news",
            component:News
        },{
            path:"/red",
            redirect:"/"
        }

    ]
})
