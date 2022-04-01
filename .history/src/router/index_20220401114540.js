
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
  console.log(to,from,next);
  const token = localStorage.getItem("tuso_token")
  if(token==""||token==null||token==undefined){
    console.log(from.fullPath!='/login');
    if(from.fullPath!='/login'){
      next({ path: '/login' })
    }
  }

})

router.afterEach((to, from) => {
  console.log(to,from);
})
export default router
