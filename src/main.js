import Vue from 'vue'
import App from './App2.vue'
import store from './store2/index'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})