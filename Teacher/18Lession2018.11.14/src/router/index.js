import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// index.vue 可以省略
import study from "@/components/study"
import java from "@/components/study/java"
import html from "@/components/study/html"
import php from "@/components/study/php"

import shop from "@/router/shop"
import goods from "@/router/goods"
import adv from "@/router/adv"

// Router 官方提供的一个插件。
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },

        {
            path:"/study",
            component:study,
            children:[
                {
                    path:"java",
                    component:java
                },
                {
                    path:"/",// 代表默认项
                    component:html,
                    alias:"html"
                },
                {
                    path:"php",
                    component:php
                }
            ]
        }
    ].concat(adv,shop,goods)
})
