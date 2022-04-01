import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {},
    component: () => import('../view/login.vue'),
  },
  {
    path: '/index',
    name: 'index',
    meta: {},
    component: () => import('../view/index.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;