import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/Home/Index"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
        meta:{
          isShow:true
        }
    },   {
          path: '/',
          name: 'Home',
          component: Home,
          meta:{
              isShow:true
          }
      }
  ]
})
