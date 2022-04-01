
import VueRouter from 'vue-router'
import Vue from 'vue'
 
// 通过vue.use(插件)，安装插件
Vue.use(VueRouter)
    // 创建路由对象
const routes = [
  {
  path: '/home',
  name: 'home',
  meta: {},
  component: () => import('../view/login.vue'),
  },
  {
    path: '/login',
    name: 'home',
    meta: {},
    component: () => import('../view/login.vue'),
    },
]
const router = new VueRouter({
        // 配置URL和组价直接的映射关系
        routes,
        // history模式
        mode: 'history'
    })
    // 将router对象传入到vue实例中
export default router
