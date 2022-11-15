import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./axios/index.js";
import "./assets/css/style.css";
import VueCarousel from "vue-carousel";
import VueMask from "v-mask";

Vue.use(VueCarousel);
Vue.use(VueMask);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
