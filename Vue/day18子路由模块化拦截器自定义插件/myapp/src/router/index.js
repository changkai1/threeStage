import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Study from '@/components/Study'
import htm from '@/components/Study/htm.vue'
import php from '@/components/Study/php.vue'
import java from '@/components/Study/java.vue'

import adv from '@/router/adv'  //引入adv路由
import goods from '@/router/goods'
import shop from '@/router/shop'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/study',
      name:'study',
      component:Study,
      children:[
        {
          path:'/',  //二级路由路径不加 /  默认显示htm组件(/)
          component:htm,
          alias:'htm'
        },
        {
          path:'php',
          component:php
        },
        {
          path:'java',
          component:java
        }
      ]
    }
  ].concat(adv,goods,shop)  //数组合并
})
















