import Vue from 'vue'
import Router from 'vue-router'
import HomeWrapper from './views/Home/index.vue'
import About from './views/Home/about.vue'
import Home from './views/Home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeWrapper,
      children: [
        { name: 'home', path: '', component: Home },
        { name: 'about', path: 'about', component: About }
      ]
    }
  ]
})
