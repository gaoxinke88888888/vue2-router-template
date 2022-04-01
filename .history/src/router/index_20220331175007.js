import Router from 'vue-router'

const router = new Router({
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