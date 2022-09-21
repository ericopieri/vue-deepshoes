import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./axios/index.js";
import "./assets/css/style.css";
import VueCarousel from "vue-carousel";

Vue.use(VueCarousel);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
