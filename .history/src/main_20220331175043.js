import Vue from "vue";
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";


new Vue({
  el: "#app",
  render: (h) => h(App),
});

// new Vue({
//   el: "#app",
//   router: router,
//   render: (h) => h(App)
// });