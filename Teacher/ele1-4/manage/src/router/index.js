import Vue from 'vue'
import Router from 'vue-router'
import shop from "./shop"
import admin from "./admin"

Vue.use(Router)

export default new Router({
    // routes:[].concat(shop,admin)
    routes:shop.concat(admin)
})
