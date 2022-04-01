import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {},
    component: () => import('../view/login.vue'),
  },
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



export default router;