import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'todomvc-app-css/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.use(ElementUI)
