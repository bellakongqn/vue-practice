import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// createElement 函数是用来生成 HTML DOM 元素的
// render: function (createElement) {
//   return createElement(App);
// }