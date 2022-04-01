import Vue from "vue";
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
// import router from "./router";
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {},
      component: () => import('./view/login.vue'),
    },
  ]
})


new Vue({
  el: "#app",
  render: (h) => h(App),
});

// new Vue({
//   el: "#app",
//   router: router,
//   render: (h) => h(App)
// });
