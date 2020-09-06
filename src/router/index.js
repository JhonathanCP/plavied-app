import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Loginalumno from '../views/Loginalumno.vue'

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
]

const router = new VueRouter({
  routes
})

export default router
