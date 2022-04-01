import { VueRouter } from 'vue-router';

const routes = [

  // {
  //   path: '/index',
  //   name: 'index',
  //   meta: {},
  //   component: () => import('../view/index.vue'),
  // },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

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