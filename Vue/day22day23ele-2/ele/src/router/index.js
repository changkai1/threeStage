import Vue from 'vue'
import Router from 'vue-router'
import adminLog from '@/components/admin/adminLog'
import addAdmin from '@/components/admin/addAdmin'
import shop from "@/router/shop"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'adminLog',
      component: adminLog
    },
    {
      path:'/addAdmin',
      name:'addAdmin',
      component:addAdmin
    },
  ].concat(shop)
})
