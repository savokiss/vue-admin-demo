import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Logins/login.vue'
import Index from './views/Home/index.vue'
import About from './views/Home/about.vue'
import Home from './views/Home/home.vue'
import Task from './views/Home/task.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/index',
      component: Index,
      children: [
        { name: 'task', path: '', component: Task },
        { name: 'home', path: '/home', component: Home },
        { name: 'about', path: '/about', component: About }
      ]
    }
  ]
})
