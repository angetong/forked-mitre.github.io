import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Repositories from '../components/Repositories.vue'
import Organizations from '../components/Organizations.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/repositories',
      name: 'Repositories',
      component: Repositories
    },
    {
      path: '/Organizations',
      name: 'Organizations',
      component: Organizations
    }
  ]
})