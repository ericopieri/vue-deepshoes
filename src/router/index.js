import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/Login.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: () => import('../layouts/Estructure.vue'),
  },
  {
    path: '',
    component: () => import('../layouts/Blank.vue'),
    children: [
      {
        path: '/login',
        component: Login
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
