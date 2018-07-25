import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import router from './router'
import store from './store'
Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
