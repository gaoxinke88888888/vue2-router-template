
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const routes = [
  {
  path: '/',
  name: 'index',
  meta: {},
  component: () => import('../view/login.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {},
    component: () => import('../view/login.vue'),
    },
]
const router = new VueRouter({
        routes,
        mode: 'history'
    })
export default router
