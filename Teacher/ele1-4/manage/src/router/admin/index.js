import adminLog from "@/components/admin/adminLog"
import addAdmin from "@/components/admin/addAdmin"
export default [
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
