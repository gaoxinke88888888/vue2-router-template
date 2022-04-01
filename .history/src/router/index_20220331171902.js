import VueRouter from 'vue-router'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {},
      component: () => import('../view/login.vue'),
    },
  ]
})

export default router;