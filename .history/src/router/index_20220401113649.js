
import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const routes = [
  {
  path: '/',
  alias: '/home',
  name: 'home',
  meta: {},
  component: () => import('../view/home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {},
    component: () => import('../view/login.vue'),
    },
]
router.beforeEach((to, from, next) => {
  // ...
})
const router = new VueRouter({
        routes,
        mode: 'history'
    })
export default router
