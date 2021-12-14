import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ChiSiamo from '../views/ChiSiamo.vue'
import IlNostroIstituto from '../views/IlNostroIstituto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chi-siamo',
    name: 'ChiSiamo',
    component: ChiSiamo,
  },
  {
    path: '/il-nostro-istituto',
    name: 'IlNostroIstituto',
    component: IlNostroIstituto,
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
