import Vuex from "vuex"
import Vue from "vue"
import admin from "@/vuex/admin"
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        admin
    }
})