import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Loginalumno from '../views/Loginalumno.vue'
import Perfilalumno from '../views/Perfilalumno.vue'
import Demos from '../views/Demos.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/loginalumno',
    name: 'Loginalumno',
    component: Loginalumno
  },
  {
    path: '/perfilalumno',
    name: 'Perfilalumno',
    component: Perfilalumno
  },
  {
    path: '/demos',
    name: 'Demos',
    component: Demos
  },
]

const router = new VueRouter({
  routes
})

export default router
