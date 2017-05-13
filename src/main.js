import Vue from 'vue';
Vue.config.productionTip = false;

require('./styles/app.scss')
import router from './scripts/router'

import store from './scripts/vuex/store'

new Vue({
    el:'#app',
    router,
    store,
    template:'<router-view></router-view>'
})