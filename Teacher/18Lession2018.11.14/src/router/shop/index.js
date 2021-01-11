import shop from "@/components/shop"
import shopType from "@/components/shop/shopType"
export default [
    {
        path:"/shop",
        component:shop,
        meta:{
            isAuthorization:true
        }
    },{
        path:"/shopType",
        component:shopType
    }
]
