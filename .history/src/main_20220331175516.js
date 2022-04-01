import Vue from "vue";
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from "./App";
import router from "./router";

Vue.use(router)

new Vue({
  el: "#app",
  render: (h) => h(App),
});

// new Vue({
//   el: "#app",
//   router: router,
//   render: (h) => h(App)
// });
