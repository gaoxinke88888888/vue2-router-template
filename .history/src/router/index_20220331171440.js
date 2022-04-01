import { VueRouter } from 'vue-router';

const router = new VueRouter({
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