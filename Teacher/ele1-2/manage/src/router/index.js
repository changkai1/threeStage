import Vue from 'vue'
import Router from 'vue-router'
import adminLog from "@/components/admin/adminLog"
import addAdmin from "@/components/admin/addAdmin"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'adminLog',
            component: adminLog
        },
        {
            path:"/addAdmin",
            component:addAdmin
        }
    ]
})
