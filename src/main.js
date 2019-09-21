import Vue from 'vue'
import App from './App4.vue'
import store from './store3/index'
// import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  // router,
  render: h => h(App)
})