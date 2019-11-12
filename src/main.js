import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mixin from "../src/mixin/mixin.js";
Vue.use(mixin);

import hbwsrc_special from "hbwsrc_special";
import 'hbwsrc_special/lib/special.css';
import './plugins/element.js'
Vue.use(hbwsrc_special)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
