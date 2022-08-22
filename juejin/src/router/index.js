import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/HomeView'
import Detail from '@/views/DetailView'

Vue.use(VueRouter)

const routes = [
  {
    name: "home",
    path: "/home",
    component: Home
  },
  {
    name: "detail",
    path: "/detail",
    component: Detail
  },
  {
    path: '*',
    redirect: "/home"
  }
]

const router = new VueRouter({
  routes
})

export default router
