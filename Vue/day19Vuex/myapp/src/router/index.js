import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 使用路由加载study组件
import study from "@/components/study"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'study',
      component: study
    }
  ]
})
