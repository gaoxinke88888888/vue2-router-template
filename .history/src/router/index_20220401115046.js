
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
const router = new VueRouter({
        routes,
        mode: 'history'
    })
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token") || "";
  console.log(token);
  if (token) {
    next();
  } else {
    if (to.path == "/login") {
      next();
    } else {
      next({ path: "/login" });
    }
  }
})
export default router
